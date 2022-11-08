import { useState, useEffect } from "react";
import { Loader, Modal, Header, SideBar, InnerWrapper, Error, BalanceCard, AddWalletModal } from "./components";
import { AppState, WalletData } from "./components/types";

function App() {

  //Local state
  const [isOpen, setIsOpen] = useState(false);
  const [accountList, setAccountList] = useState<any[]>([]);

  const [state, setState] = useState<AppState>({
    isLoading: false,
    isError: false,
    reload: false,
    errMssge: ""
  })

  const { isLoading, isError, reload } = state

  //Handler functions
  const reloadFunc = () => {
    setState((preState) => ({
      ...preState,
      isError: false,
      reload: !reload,
    }))
  };

  const closeModal = () => setIsOpen(false);

  //Hooks
  useEffect(() => {

    const fetchAccountList = async () => {
      setState((preState) => ({
        ...preState,
        isLoading: true
      }))

      const result = await fetch("http://localhost:3090/accounts");
      await result.json()
        .then((accounts) => {
          setState((preState) => ({
            ...preState,
            isLoading: false
          }))
          setAccountList(accounts)
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
    }

    fetchAccountList();
    return () => {
      setState((preState) => ({
        ...preState,
        isLoading: false,
        isError: false,
        reload: false,
        errMssge: ""
      }))
      setAccountList([]);
    }
  }, [reload]);

  return (
    <div>
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

          <div className="balance-item">
            {isLoading || accountList?.length < 1 || isError ? null :
              accountList?.map((item: WalletData, id: number): JSX.Element => {
                return (
                  <div key={`${item.id}${id}`}>
                    <BalanceCard
                      imageUrl={item.imgURL}
                      name={item.name}
                      balance={item.balance}
                      currency={item.currency}
                    />
                  </div>
                )
              })}
          </div>

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
      <Modal isOpen={isOpen}>
        <AddWalletModal onHide={closeModal} setAccList={setAccountList} />
      </Modal>
    </div >
  )
}

export default App;