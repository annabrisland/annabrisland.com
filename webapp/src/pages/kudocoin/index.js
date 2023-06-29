import KudoCoinIntro from "../../images/KudoCoin.png";
import KudoCoinScreen from "../../images/KudoCoinT1.png";
import { useEffect } from "react";
import BasePage from "../basePage";

export default function KudoCoin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "Details",
      details: [
        {
          type: "subtitle",
          details: "My Role",
        },
        {
          type: "text",
          details: "Illustrator & Designer",
        },
        {
          type: "subtitle",
          details: "For What?",
        },
        {
          type: "text",
          details: "Back to Hacking 2021 (Best Incomplete Hack Winner)",
        },
      ],
    },
    {
      title: "Overview",
      details: [
        {
          type: "subtitle",
          details: "What is KudoCoin?",
        },
        {
          type: "text",
          details:
            "KudoCoin is an ERC20 token that serves its purpose as street cred for developers. When a user first links their Github handle to a wallet address, they have 0 KudoCoins (KCN). Every time they help a fellow colleague in real life, or a random stranger on the internet, the individual being helped may decide to award this user with a KCN. A coin is subtracted from the helped account to the account of the helper.",
        },
      ],
    },
    {
      title: "Questions",
      details: [
        {
          type: "subtitle",
          details: "How do developers appreciate each other?",
        },
        {
          type: "text",
          details:
            "Stack Overflow promises to have the best answer to any technical question, and they often do! With its extensive community of experienced devs, questions rarely go unanswered. However, the only current way to show gratitude is to thumbs-up a response",
        },
        {
          type: "focus",
          details: {
            title: "What do we bring to the table? 💡",
            text: "We wanted to create a cross platform wallet so that coders and developers can track their contributions to problem solving communities. KudoCoin aims to represent a coder’s credibility and contribution.",
          },
        },
      ],
    },
    {
      title: "Illustrations",
      details: [
        {
          type: "text",
          details:
            "We illustrated a fictional coin to give the cryptocurrency its own credibility.",
        },
        {
          type: "image",
          details: KudoCoinScreen,
        },
      ],
    },
    {
      title: "Learnings",
      details: [
        {
          type: "subtitle",
          details: "Intangible cryptocurrency is confusing and fun!",
        },
        {
          type: "text",
          details:
            "It was fun to design and illustrate the appearance of an object that won’t physically exist. We learned so much about cryptocurrency, the ethereum blockchain, smart contracts, and the ERC20 protocol. When the token was made, it felt so satisfying to discover a whole new world of cryptocurrency development.",
        },
      ],
    },
  ];

  return <div>{BasePage(KudoCoinIntro, content)}</div>;
}
