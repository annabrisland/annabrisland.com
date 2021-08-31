import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import TeaTime from "./pages/teatime";
import SoundTown from "./pages/soundtown";
import DNA from "./pages/dna";
import Fungi from "./pages/fungi";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/teatime" component={TeaTime} />
      <Route exact path="/soundtown" component={SoundTown} />
      <Route exact path="/dna" component={DNA} />
      <Route exact path="/fungi" component={Fungi} />
    </Router>
  );
}

export default App;
