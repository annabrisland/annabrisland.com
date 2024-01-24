import UmamiIntro from "../../assets/images/umami/umamiCover.jpg";
import Umami1 from "../../assets/images/umami/umami1.jpg";
import Umami2 from "../../assets/images/umami/umami2.jpg";
import Umami3 from "../../assets/images/umami/umami3.jpg";
import Umami4 from "../../assets/images/umami/umami4.jpg";
import Umami5 from "../../assets/images/umami/umami5.jpg";
import Umami6 from "../../assets/images/umami/umami6.jpg";
import Umami7 from "../../assets/images/umami/umami7.jpg";
import Botany8 from "../../assets/images/botany/botany8.jpg";
import Botany9 from "../../assets/images/botany/botany9.jpg";
import Botany10 from "../../assets/images/botany/botany10.jpg";

import { useEffect } from "react";
import BasePage from "../basePage";
import Header from "../../components/Header";

export default function Umami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header isProject={true} />
      <section className="project-header">
        <div className="project-info grid">
          <div className="project-title">
            <h1 className="project-name">Umami</h1>
            <h3>Creating a sharable digital cookbook</h3>
          </div>
          <div className="roles-list">
            <p>UI/UX Design</p>
            <p>Illustration</p>
            <p>Design Lead</p>
          </div>
        </div>
        <div>
          <img className="cover-img" src={UmamiIntro} alt="Umami Project" />
        </div>
      </section>
      <section className="project-details grid">
        <p className="bold-text description">
          There is no central hub to maintain a digital recipe collection,
          leaving users unable to find what they want.
        </p>
        <p className="description">
          Umami is a healthy recipe sharing app that allows users to search for
          the perfect recipe. Users can also upload their own recipes and even
          follow their favourite recipe creators to stay on top of the best
          delicious creations. It also allows home-chefs to keep track of their
          fridge and pantries so they can make the most of the ingredients they
          already have!
        </p>
      </section>
      <section className="content">
        <div className="center-text grid">
          <p className="section-title">Solution</p>
          <div className="section-text">
            <p className="text-heading">
              Allow users to upload and network their own recipes
            </p>
            <p>
              Users should be able to maintain their own recipe collection
              without searching through long browser bookmarks or making a trip
              cross-platform.
            </p>
            <p className="text-heading">
              Enable easy discovery of new recipes that align with the user's
              tastes
            </p>
            <p>
              The app should understand the user's dietary restrictions and
              taste preferences to provide them with an endless supply of
              potential recipes.
            </p>
            <p className="text-heading">
              Lower the barrier of entry to cooking
            </p>
            <p>
              We wanted create an app that would appeal to young and old users,
              whether they were accomplished chefs or just getting into home
              cooking. By displaying recipes with ingredients already found in
              the user's fridge, it is easier for them to get started in the
              kitchen.
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="card-3">
            <img
              className="project-img"
              src={Umami1}
              alt="Botany project mockup"
            />
          </div>
          <div className="card-4 project-img">
            <img
              className="project-img"
              src={Umami2}
              alt="Botany project mockup"
            />
          </div>
        </div>
        <div className="grid">
          <p className="section-title">Competitive Audit</p>
          <div className="section-text">
            <p className="text-heading">
              Allow users to upload and network their own recipes
            </p>
            <p>
              Users should be able to maintain their own recipe collection
              without searching through long browser bookmarks or making a trip
              cross-platform.
            </p>
          </div>
        </div>
        <div className="grid ">
          <div className="focus-text card-4">
            <p>71% have ‘gone digital’ when looking for a recipe.</p>
            <p>33% say technology makes cooking easier.</p>
            <p>41% enjoy cooking something new.</p>
          </div>
          <img className="project-img card-3" src={Umami3} />
        </div>
        <div className="grid">
          <img className="project-img card-2" src={Umami4} />
          <div className="focus-text card-1">
            We created a flexible onboarding process accounting for personal
            tastes, dietary restrictions, and recipe discovery preferences.
          </div>
        </div>
        <div className="grid">
        <img className="project-img card-1" src={Umami5} />
        <img className="project-img card-2" src={Umami6} />
        </div>
        <p className="center-text">
        Our home page offers a personalised feed based on the user’s onboarding choices and their followed users.
        </p>
        <div className="grid">
          <div className="focus-text card-4">
          We settled on a bright and visually appealing design system to invoke a sense of excitement when the user opens the app.
          </div>
          <img className="project-img card-3" src={Umami7} />
        </div>
      </section>
    </div>
  );

  // const content = [
  //   {
  //     title: "Umami",
  //     details: [
  //       {
  //         type: "intro",
  //         details: {
  //           title: "Umami",
  //           subtitle: "Your sharable digital cookbook.",
  //           text: "Users can track their pantries, upload their own recipes, and follow their favourite recipe creators to stay on top of the best delicious creations.",
  //           myRole: "UI/UX Designer & Illustrator",
  //           timeline: "UBC Launchpad - 8 months",
  //         },
  //       }
  //     ],
  //   },
  //   {
  //     title: "Problem",
  //     details: [
  //       {
  //         type: "subtitle",
  //         details: "There is no central hub to maintain a digital recipe collection, leaving users unable to find what they want.",
  //       },
  //       {
  //         type: "text",
  //         details:
  //           "Umami is a healthy recipe sharing app that allows users to search for the perfect recipe. Users can also upload their own recipes and even follow their favourite recipe creators to stay on top of the best delicious creations. It also allows home-chefs to keep track of their fridge and pantries so they can make the most of the ingredients they already have!",
  //       },
  //       {
  //         type: "image",
  //         details: UmamiIntro,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Solution",
  //     details: [
  //       {
  //         type: "subtitle",
  //         details: "Allow users to upload and network their own recipes",
  //       },
  //       {
  //         type: "text",
  //         details:
  //           "Users should be able to maintain their own recipe collection without searching through long browser bookmarks or making a trip cross-platform.",
  //       },
  //       {
  //         type: "subtitle",
  //         details: "Enable easy discovery of new recipes that align with the user's tastes",
  //       },
  //       {
  //         type: "text",
  //         details:
  //           "The app should understand the user's dietary restrictions and taste preferences to provide them with an endless supply of potential recipes.",
  //       },
  //       {
  //         type: "subtitle",
  //         details: "Lower the barrier of entry to cooking",
  //       },
  //       {
  //         type: "text",
  //         details:
  //           "We wanted create an app that would appeal to young and old users, whether they were accomplished chefs or just getting into home cooking. By displaying recipes with ingredients already found in the user's fridge, it is easier for them to get started in the kitchen.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Competitive Audit",
  //     details: [
  //       {
  //         type: "text",
  //         details:
  //           <p>We completed a competitive audit to check out what other recipe apps on the market offered and to find out what they were missing. With so many websites, cookbooks and other resources online, it can be time-consuming and tedious to find a healthy recipe that fits each person’s dietary restrictions and taste preferences. <br /> <br />
  //           Many apps on the market are based on sharing their own recipes, however, these platforms lack community, variety and the ability to share recipes with others. <br /> <br />
  //           We found that three major things: <br /> <br />
  //           1. Not all platforms had unique and interesting recipes <br />
  //           2. Existing platforms do not focus on the healthiness of the recipe <br />
  //           3. Platforms do not allow users to add their own recipes`</p>,
  //       },
  //       {
  //         type: "image",
  //         details: UmamiIntro,
  //       },
  //     ],
  //   },
  //   {
  //     title: "User Research",
  //     details: [
  //       {
  //         type: "text",
  //         details:
  //           "We provided potential users with a questionnaire to understand how we can persuade people to use the app and cater to our different user personas. We discovered our two main user types:",
  //       },
  //       {
  //         type: "focus",
  //         details: {
  //           title: "User Persona 1 📖 🛒",
  //           text: "They search for a recipe and then buy ingredients.",
  //         },
  //       },
  //       {
  //         type: "focus",
  //         details: {
  //           title: "User Persona 2 🥬🥕",
  //           text: "They check the ingredients they already have and then find a fitting recipe.",
  //         },
  //       },
  //       {
  //         type: "text",
  //         details:
  //           <p>We also found that people valued three things: <br /> <br /> 1. Upfront cooking time <br /> 2. Healthiness of the recipe <br /> 3. Tastiness of the recipe </p>,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Design Solutions",
  //     details: [
  //       {
  //         type: "text",
  //         details:
  //           "We created a flexible onboarding process accounting for personal tastes, dietary restrictions, and recipe discovery preferences.",
  //       },
  //       {
  //         type: "image",
  //         details: UmamiIntro,
  //       },
  //       {
  //         type: "text",
  //         details:
  //           "Our home page offers a personalised feed based on the user’s onboarding choices and their followed users.",
  //       },
  //       {
  //         type: "image",
  //         details: UmamiIntro,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Design System",
  //     details: [
  //       {
  //         type: "text",
  //         details:
  //           "We settled on a bright and visually appealing design system to invoke a sense of excitement when the user opens the app.",
  //       },
  //       {
  //         type: "image",
  //         details: UmamiIntro,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Learnings",
  //     details: [
  //       {
  //         type: "focus",
  //         details: {
  //           title: "Designing an app with many competitors is daunting and exciting!",
  //           text: "As there are already so many food and recipe apps out there, it was fun to come up with features that set Umami apart, like the social feed aspect.",
  //         },
  //       },
  //       {
  //         type: "focus",
  //         details: {
  //           title: "Personalisation of user experience can be tricky",
  //           text: "I think the app further needs some personalisation of experience based on our two user personas. I found it difficult to make sure that all users can access all of the app's features efficiently when customising the experience and so this could be improved.",
  //         },
  //       },
  //       {
  //         type: "image",
  //         details: UmamiIntro,
  //       },
  //     ],
  //   },
  // ];

  // return <div>{BasePage(UmamiIntro, "#447551", content)}</div>;
}
