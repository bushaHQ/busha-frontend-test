import { useState, useEffect, useCallback } from "react";
import { Loader, Modal, Header, SideBar, InnerWrapper, Error, BalanceCard, AddWalletModal } from "./components";
import { AppState, WalletData } from "./components/types";

function App() {

  //Local state
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<AppState>({
    isLoading: false,
    isError: false,
    data: [],
    reload: false,
    errMssge: ""
  })

  const { isLoading, isError, data, reload } = state

//Handler functions
  const reloadFunc = () => {
    setState((preState) => ({
      ...preState,
      isError: false,
      reload: !reload,
    }))
  };

  const fetchAccountList = useCallback(async () => {
    setState((preState) => ({
      ...preState,
      isLoading: true
    }))

    const result = await fetch("http://localhost:3090/accounts");
    await result.json()
      .then((accounts) => {
        setState((preState) => ({
          ...preState,
          isLoading: false,
          data: accounts
        }))
        return accounts;
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

  const setList = (data: any) => {
    setState((preState) => ({
      ...preState,
      data: data
    }))
  }

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  //Hooks
  useEffect(() => {

    fetchAccountList();
    return () => {
      setState((preState) => ({
        ...preState,
        isLoading: false,
        isError: false,
        data: [],
        reload: false,
        errMssge: ""
      }))
    };
  }, [reload, fetchAccountList]);

  return (
    <div>
      <Modal isOpen={isOpen}>
        <AddWalletModal onHide={closeModal} reloadAccount={() => null} setAccList={setList} />
      </Modal>
      <Header />
      <InnerWrapper>
        <SideBar />
        <div className="app-content">
          <div className={`app-content-header${!isLoading && !isError ? " underline" : ""}`}>
            <h3 className="app-content-header-text">Wallet</h3>
            <div className="app-content-right">
              {isLoading || isError ? null :
                <button className="add-wallet" onClick={() => setIsOpen(true)}>+ Add new wallet</button>}
            </div>
          </div>

          {isLoading || data?.length < 1 || isError ? null :
            (
              <div className="balance-item">
                {data?.map((item: WalletData): JSX.Element => {
                  return <BalanceCard
                    key={item.id}
                    imageUrl={item.imgURL}
                    name={item.name}
                    balance={item.balance}
                    currency={item.currency}
                  />
                })}
              </div>
            )
          }

          {!isLoading ? null :
            <div className="loader easer">
              <Loader width={8} size={83.37} />
            </div>
          }
          {!isLoading && isError ?
            <Error action={reloadFunc} /> : null
          }
        </div>
      </InnerWrapper >
    </div >
  )
}

export default App;
