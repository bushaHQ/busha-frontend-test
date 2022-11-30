//fonts
import "./fonts/Aribau Grotesk Light Italic.otf";
import "./fonts/Aribau Grotesk Regular.otf";
import "./fonts/Aribau Grotesk Medium.otf";
import "./fonts/Aribau Grotesk Bold.otf";

import { AccountProvider } from "./context/dataContext";
import Home from "./pages/home/Home";

function App(): JSX.Element {
  return (
    <AccountProvider>
      <Home />
    </AccountProvider>
  );
}

export default App;
