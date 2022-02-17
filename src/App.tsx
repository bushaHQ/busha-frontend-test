import { useState, useEffect, useCallback } from "react";
import Modal from "./components/shared/Modal";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Loader from "./components/shared/Loader";
import Error from "./components/error/error";
import Card from "./components/card/card";
import ModalChild from "./components/modalChild";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);

  const reload = useCallback(() => {
    setError(false);
    setRefresh(!refresh);
  }, [refresh]);

  const fetchAccounts = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3090/accounts");
      const accounts = await res.json();
      setLoading(false);
      setSuccess(true);
      setData(accounts);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchAccounts();
    return () => {
      setLoading(false);
      setError(false);
      setData([]);
      setRefresh(false);
      setSuccess(false);
    };
  }, [refresh]);

  const hideModal = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <Modal isOpen={open}>
        <ModalChild onHide={hideModal} refresh={reload} />
      </Modal>
      <Header></Header>
      <div className="app-container">
        <Sidebar />
        <div className="main-body">
          <div className="main-body-header">
            <span className="wallet">Wallet</span>
            {success && (
              <div className="add-wallet" onClick={() => setOpen(true)}>
                + Add new wallet
              </div>
            )}
          </div>
          {success && <hr className="main-body-divider" />}
          {loading && (
            <div className="loader">
              <Loader />
            </div>
          )}
          {error && <Error action={reload} />}
          {data.length > 0 && (
            <div className="card">
              {data &&
                data.map((val: any) => (
                  <Card
                    key={val.id}
                    imageUrl={val.imgURL}
                    currency={val.name}
                    balance={val.balance}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
