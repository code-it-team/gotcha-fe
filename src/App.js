import { Router } from "@reach/router";
import SignInPage from "./components/SignInPage";
import { _URLS } from "./constants/urls";

const App = () => {
  return (
    <Router>
      <SignInPage path={_URLS.signin} default />
    </Router>
  );
};

export default App;
