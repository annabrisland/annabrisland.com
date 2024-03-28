import { useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import SproatLakeScreen from "../../assets/images/sproatLake/sproatLake.png";

export default function SproatLake() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProjectHeader project={"Sproat Lake"} description={"Object-oriented programming for game development"} roles={["JavaScript","Game Dev"]} links={[{name: "View on Github", url: "https://github.com/annabrisland/sproat-lake"}, {name: "Try it out here", url: "https://annabrisland.github.io/sproat-lake/"}]} img={SproatLakeScreen} />
      <div className="content grid project-details">
        <div className="description">Sproat Lake is an RPG maze game written in vanilla JavaScript. The game engine is created through the use of the HTML5 canvas element, classes, and object-oriented programming.</div>
      </div>
    </div>
  );
  
}
