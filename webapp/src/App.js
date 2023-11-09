import { HashRouter as Router, Route } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/home";
import TeaTime from "./pages/teatime";
import Umami from "./pages/umami";
import KudoCoin from "./pages/kudocoin";
import Labby from "./pages/labby";
import Botany from "./pages/ubcbotany";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/teatime" component={TeaTime} />
      <Route exact path="/umami" component={Umami} />
      <Route exact path="/kudocoin" component={KudoCoin} />
      <Route exact path="/labby" component={Labby} />
      <Route exact path="/ubcbotany" component={Botany} />
    </Router>
  );
}

export default App;
