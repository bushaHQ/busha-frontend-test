import { useState, useEffect, useCallback } from "react";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as ErrorIcon } from "../../assets/svg/error-icon.svg";
import { Loader, Error } from "../index";
import { AddWalletProps, AddWalletState } from "../types";


const AddWalletModal = ({ onHide, setAccList }: AddWalletProps): JSX.Element => {

    //Local state
    const [state, setState] = useState<AddWalletState>({
        isLoading: false,
        isError: false,
        isSubmitting: false,
        isSubmitError: false,
        errMssge: "",
        subErrMssge: "",
        data: [],
        selected: "",
        selectedName: "",
    })

    const { isLoading, isError, selectedName, isSubmitting, isSubmitError, errMssge, data, selected } = state

    //Handler functions
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let sName = data.find(one => one.currency === e.target.value).name;
        setState({
            ...state,
            selected: e.target.value,
            selectedName: sName //e.target.name
        })
    }

    const closeError = () => {
        setState({
            ...state,
            isSubmitError: false
        })
    }

    //API functions
    const fetchWallets = useCallback(async () => {
        setState((preState) => ({
            ...preState,
            isLoading: true
        }))
        const result = await fetch("http://localhost:3090/wallets");
        await result.json()
            .then((wallets) => {
                if (result.ok) {
                    setState((preState) => ({
                        ...preState,
                        isLoading: false,
                        data: wallets,
                        selected: wallets[0]?.currency || ""
                    }))
                } else {
                    setState((preState) => ({
                        ...preState,
                        isLoading: false,
                        isError: true,
                        errMssge: result?.statusText || ""
                    }))
                }
            })
            .catch((error) => {
                setState((preState) => ({
                    ...preState,
                    isLoading: false,
                    isError: true,
                    errMssge: error
                }))
            })
    }, [])

    const addWallet = async () => {
        let body = JSON.stringify({ currency: selected })

        setState({
            ...state,
            isSubmitting: true,
            isSubmitError: false
        })
        await fetch("http://localhost:3090/accounts", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body,
        })
            .then(async (result) => {
                if (result.ok) {
                    let updateData = await result.json();
                    setState({
                        ...state,
                        isSubmitting: false,
                    })
                    setAccList((prevList: any[]) => [...prevList, updateData]);
                    return true;
                } else {
                    setState({
                        ...state,
                        isSubmitting: false,
                        isSubmitError: true,
                        subErrMssge: result?.statusText || ""
                    })
                }
            })
            .then((status) => {
                if (status) onHide();
            })
            .catch((error) => {
                setState({
                    ...state,
                    isSubmitting: false,
                    isSubmitError: true,
                    subErrMssge: error
                })
            })
    };

    //Hooks
    useEffect(() => {
        fetchWallets();
        return () => {
            setState((preState) => ({
                ...preState,
                isLoading: false,
                isError: false,
                data: [],
                errMssge: ""
            }))
        };
    }, [fetchWallets]);

    return (
        <div className="modal-content">
            <div className="modal-body">
                <div className="modal-body-header">
                    <h4 className="modal-body-title">Add new wallet</h4>
                    <div>

                        <button aria-label="Close button" className="clickable" id="close-button" onClick={onHide}>
                            <Close
                                className="close-button"
                                fill="#000"
                            />
                        </button>
                    </div>
                </div>
                {isLoading || isError ? null :
                    <>
                        <p className="modal-body-text">
                            The crypto wallet will be created instantly and be available in
                            your list of wallets.
                        </p>
                        <div className="modal-body-form">
                            <p className="modal-body-label">Select wallet</p>
                            <select
                                name="currency"
                                onChange={handleChange}
                            >
                                {data && data.length > 0 ?
                                    data.map((val: any) => (
                                        <option value={val.currency} key={val.name}>
                                            {val.name}
                                        </option>
                                    ))
                                    : null}
                            </select>
                            <div className="modal-form-button">
                                <button aria-label={isSubmitting ? "Loading..." : "Submit Form"} id="submit-form" onClick={addWallet}>
                                    {isSubmitting ?
                                        <>
                                            <Loader width={3} size={15} />
                                        </>
                                        :
                                        "Create wallet"
                                    }
                                </button>
                            </div>
                            {!isSubmitError ? null :
                                <div className="submit-error easer">
                                    <div className="error-mssge">
                                        <ErrorIcon />
                                        <span>{"Network Error" || errMssge}</span>
                                    </div>

                                    <button aria-label="Close button" className="clickable" id="close-error" onClick={closeError}>
                                        <Close
                                            width={10}
                                            height={10}
                                            fill="#D72C0D"
                                            cursor="pointer"
                                        />
                                    </button>
                                </div>
                            }
                        </div>
                    </>
                }
                {!isLoading ? null :
                    <>
                        <label className="label-class" htmlFor="loading-wallets">Loading...</label>
                        <div className="loader easer" id="loading-wallets">
                            <Loader width={8} size={83.37} />
                        </div>
                    </>
                }
                {!isError ? null : <Error action={fetchWallets} />}
            </div>
        </div>
    );
};

export default AddWalletModal;
