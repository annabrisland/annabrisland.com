import teatimeIntro from "../../images/TeaTime.png";
import teatimeScreen from "../../images/teatimeScreen.png";
import teatimeScreen2 from "../../images/teatimeScreen2.png";
import teatimeScreen3 from "../../images/teatimeScreen3.png";
import { useEffect } from "react";
import BasePage from "../basePage";

export default function TeaTime() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "TeaTime",
      details: [
        {
          type: "intro",
          details: {
            title: "TeaTime",
            subtitle: "Encouraging healthy debate and communication.",
            text: "We want to disrupt loneliness and motivate people to engage in discussion.",
            myRole: "UI/UX Designer",
            timeline: "SF Hacks 2021 - 12 hours",
          },
        }
      ],
    },
    {
      title: "Problem",
      details: [
        {
          type: "subtitle",
          details: "In this digital age, many people struggle with a lack of face-to-face interaction.",
        },
        {
          type: "text",
          details:
            "Loniliness and lack of social interaction can have a drastic impact on an individual's mental health, lifestyle, and happiness",
        },
      ],
    },
    {
      title: "Solution",
      details: [
        {
          type: "subtitle",
          details: "Simplify global communication with strangers",
        },
        {
          type: "text",
          details:
            "TeaTime is a platform where users can communicate verbally no matter where or when they are.",
        },
        {
          type: "subtitle",
          details: "Generate exciting topics of conversation",
        },
        {
          type: "text",
          details:
            "By providing a selection of trending topics to consider, beginning your conversation is as easy as selecting a story of interest and recording your thoughts.",
        },
        {
          type: "subtitle",
          details: "Encourage everyone to speak up and share",
        },
        {
          type: "text",
          details:
            "Lock voice notes and messages before users have recorded and posted their own thoughts.",
        },
      ],
    },
    {
      title: "Design",
      details: [
        {
          type: "image",
          details: teatimeScreen,
        },
        {
          type: "image",
          details: teatimeScreen2,
        },
        {
          type: "image",
          details: teatimeScreen3,
        },
      ],
    },
    {
      title: "Learnings",
      details: [
        {
          type: "focus",
          details: {
            title: "This was my first UI/UX design experience!",
            text: "I learnt so much about the design process in such a short period of time. I really enjoyed being able to creatively think out a design solution to a social problem.",
          },
        },
      ],
    },
  ];

  return <div>{BasePage(teatimeIntro, "#3A82FC", content)}</div>;
}
