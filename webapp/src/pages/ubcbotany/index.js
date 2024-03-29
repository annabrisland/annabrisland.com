import { useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";

import BotanyIntro from "../../assets/images/botany/botanyProjectCover.jpg";
import Botany1 from "../../assets/images/botany/botany1.jpg";
import Botany2 from "../../assets/images/botany/botany2.jpg";
import Botany3 from "../../assets/images/botany/botany3.jpg";
import Botany4 from "../../assets/images/botany/botany4.jpg";
import Botany5 from "../../assets/images/botany/botany5.jpg";
import Botany6 from "../../assets/images/botany/botany6.jpg";
import Botany7 from "../../assets/images/botany/botany7.jpg";
import Botany8 from "../../assets/images/botany/botany8.jpg";
import Botany9 from "../../assets/images/botany/botany9.jpg";
import Botany10 from "../../assets/images/botany/botany10.jpg";

export default function Botany() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProjectHeader project={"UBC Botany"} description={"Designing a logo and mascots"} roles={["Illustration","Logo Design","Graphic Design"]} img={BotanyIntro} />
      <section className="project-details grid">
        <p className="description">
          The botany department at UBC represents students in the Botany
          program, supporting their love for plants, fungi and algae. <br />
          <br /> They needed a logo design that could be printed on shirts,
          totes and stickers.
        </p>
      </section>
      <section className="content">
        <div className="grid">
          <div className="card-1">
            <img
              className="project-img"
              src={Botany1}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-2 project-img">
            <img
              className="project-img"
              src={Botany2}
              alt="Botany project mockup"
            />
          </div>
        </div>
        <div className="grid">
          <div className="card-3 project-img">
            <img
              className="project-img"
              src={Botany3}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-4 project-img">
            <img
              className="project-img"
              src={Botany4}
              alt="Botany project mockup"
            />
          </div>
        </div>
        <div className="grid">
          <div className="card-7 project-img">
            <img
              className="project-img"
              src={Botany5}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-5 project-img">
            <img
              className="project-img"
              src={Botany6}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-7 project-img">
            <img
              className="project-img"
              src={Botany7}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-5 project-img">
            <img
              className="project-img"
              src={Botany8}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-6 project-img">
            <img
              className="project-img"
              src={Botany9}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-5 project-img">
            <img
              className="project-img"
              src={Botany10}
              alt="Botany project mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
