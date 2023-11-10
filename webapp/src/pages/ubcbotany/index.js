import BotanyIntro from "../../images/BotanyIntro.png";
import BotanyScreen from "../../images/BotanyT1.png";
import BotanyScreen2 from "../../images/BotanyT2.png";
import BotanyScreen3 from "../../images/BotanyT3.png";
import BotanyScreen4 from "../../images/BotanyT4.png";
import BotanyScreen5 from "../../images/BotanyT5.png";
import BotanyScreen6 from "../../images/BotanyT6.png";
import BotanyScreen7 from "../../images/BotanyT7.png";
import BotanyScreen8 from "../../images/BotanyT8.png";
import { useEffect } from "react";
import BasePage from "../basePage";

export default function Botany() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return ( 
  <div>
  <nav>
    <a class="logo" href="#">
    </a>
    <div id="nav-items">
        <div class="nav-item">
            Work
        </div>
        <div class="nav-item">
            About
        </div>
        <div class="nav-item CTA">
            Resume
        </div>
    </div>
</nav>
<section class="project-header">
    <div class="project-info grid">
        <div class="project-title">
            <h1 class="project-name">UBC Botany</h1>
            <h3>Designing a logo and mascots</h3>
        </div>
        <div class="roles-list">
            <p>
                Illustration
            </p>
            <p>
                Logo Design
            </p>
            <p>
                Graphic Design
            </p>
        </div>
    </div>
    <div>
        <img class="cover-img" src="./assets/images/botany/botanyProjectCover.jpg" alt="Botany Project"/>
    </div>
</section>
<section class="project-details grid">
    <p class="description">
        The botany department at UBC represents students in the Botany program, supporting their love for plants, fungi and algae. <br/><br/> They needed a logo design that could be printed on shirts, totes and stickers.
    </p>
</section>
<section class="content">
    <div class="grid">
        <div class="card-1">
            <img class="project-img" src="./assets/images/botany/botany1.jpg" alt="Botany project mockup"/>
        </div>
        <div class="card-2 project-img">
            <img class="project-img" src="./assets/images/botany/botany2.jpg" alt="Botany project mockup"/>
        </div>
    </div>
    <div class="grid">
        <div class="card-3 project-img">
            <img class="project-img" src="./assets/images/botany/botany3.jpg" alt="Botany project mockup"/>
        </div>
        <div class="card-4 project-img">
            <img class="project-img" src="./assets/images/botany/botany4.jpg" alt="Botany project mockup"/>
        </div>
    </div>
    <div class="grid">
        <div class="card-7 project-img">
            <img class="project-img" src="./assets/images/botany/botany5.jpg" alt="Botany project mockup"/>
        </div>
        <div class="card-5 project-img">
            <img class="project-img" src="./assets/images/botany/botany6.jpg" alt="Botany project mockup"/>
        </div>
        <div class="card-7 project-img">
            <img class="project-img" src="./assets/images/botany/botany7.jpg" alt="Botany project mockup"/>
        </div>
        <div class="card-5 project-img">
            <img class="project-img" src="./assets/images/botany/botany8.jpg" alt="Botany project mockup"/>
        </div>
        <div class="card-6 project-img">
            <img class="project-img" src="./assets/images/botany/botany9.jpg" alt="Botany project mockup"/>
        </div>
        <div class="card-5 project-img">
            <img class="project-img" src="./assets/images/botany/botany10.jpg" alt="Botany project mockup"/>
        </div>
    </div>
</section>
</div>)
}
