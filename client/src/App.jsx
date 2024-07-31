import Navbar from "./componenets/Navbar";
import GsapTransition from "./componenets/GsapTransition";
import { Provider } from "react-redux";
import { store } from "../store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <GsapTransition />
      </Provider>
    </>
  );
}

export default App;
