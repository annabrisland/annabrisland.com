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

  const content = [
    {
      title: "Labby",
      details: [
        {
          type: "intro",
          details: {
            title: "UBC Botany",
            subtitle: "Logo branding and illustration",
            text: "UBC Botany needed a design that could be printed on shirts, totes, and stickers.",
            myRole: "Illustrator & Graphic Designer",
            timeline: "1 Week",
          },
        }
      ],
    },
    {
      title: "Illustrations",
      details: [
        {
          type: "image",
          details: BotanyScreen,
        },
        {
          type: "image",
          details: BotanyScreen2,
        },
        {
          type: "image",
          details: BotanyScreen3,
        },
        {
          type: "image",
          details: BotanyScreen4,
        },
        {
          type: "image",
          details: BotanyScreen5,
        },
        {
          type: "image",
          details: BotanyScreen6,
        },
        {
          type: "image",
          details: BotanyScreen7,
        },
        {
          type: "image",
          details: BotanyScreen8,
        },
      ],
    },
  ];

  return <div>{BasePage(BotanyIntro, "#077039", content)}</div>;
}
