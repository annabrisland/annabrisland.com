import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import TeaTime from "./pages/teatime";
import SoundTown from "./pages/soundtown";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/teatime" component={TeaTime} />
      <Route exact path="/soundtown" component={SoundTown} />
    </Router>
  );
}

export default App;
