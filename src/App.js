import "bootstrap/dist/css/bootstrap.min.css";
import HigherOrderMain from "./Component/HigherOrderMain";
import PureCompMain from "./Component/PureComponentMain";

function App() {
  return (
    <div className="App">
      <PureCompMain />
      <br />
      <HigherOrderMain />
    </div>
  );
}

export default App;
