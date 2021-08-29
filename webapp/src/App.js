import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/createRoom" component={Home} />
    </Router>
  );
}

export default App;
