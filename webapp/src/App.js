import { HashRouter as Router, Route } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./assets/css/style.css";
import Home from "./pages/home";
import TeaTime from "./pages/teatime";
import Umami from "./pages/umami";
import KudoCoin from "./pages/kudocoin";
import Labby from "./pages/labby";
import Botany from "./pages/ubcbotany";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [small, setSmall] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // intersection ratio
    };

    const observer = new IntersectionObserver(([entry]) => {
      setSmall(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header handleScroll={handleScroll} />
      <div className={`large ${small ? "small" : ""}`}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/teatime" component={TeaTime} />
          <Route exact path="/umami" component={Umami} />
          <Route exact path="/kudocoin" component={KudoCoin} />
          <Route exact path="/labby" component={Labby} />
          <Route exact path="/ubcbotany" component={Botany} />
        </Router>
      </div>
      <Footer text={""} ref={ref} />
    </div>
  );
}

export default App;
