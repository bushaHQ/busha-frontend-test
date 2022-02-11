import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/Main";
import {AllContentBox} from "./components/style"
function App() {
  return (
    <>
      <Header />
      <AllContentBox>
        <Sidebar />
        <MainContent />
      </AllContentBox>
    </>
  );

}

export default App;
