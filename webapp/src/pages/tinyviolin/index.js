import { useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import TinyViolinScreen from "../../assets/images/tinyViolin/tinyViolin.png";

export default function TinyViolin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProjectHeader project={"Tiny Violin"} description={"Exploring human-device interaction"} roles={["React JS","TensorFlow"]} links={[{name: "View on Github", url: "https://github.com/annabrisland/tiny-violin"}, {name: "Try it out here", url: "https://tiny-violin.annabrisland.com/"}]} img={TinyViolinScreen} />
      <div className="content grid project-details">
        <div className="description">Built using TensorFlow.js and MediaPipe, the user can interact with the application by holding their hands up in front of their camera. The application will detect the user's hands and display a visual representation of the user's hands on the screen. The user can then play notes by touching their fingers to their thumbs.</div>
      </div>
    </div>
  );
  
}
