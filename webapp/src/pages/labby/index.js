import LabbyIntro from "../../images/LabbyIntro.png";
import LabbyScreen from "../../images/LabbyT1.png";
import LabbyScreen2 from "../../images/LabbyT2.png";
import LabbyScreen3 from "../../images/LabbyT3.png";
import LabbyScreen4 from "../../images/LabbyT4.png";
import LabbyScreen5 from "../../images/LabbyT5.png";
import { useEffect } from "react";
import BasePage from "../basePage";
import ProjectHeader from "../../components/ProjectHeader";

export default function Labby() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "Problem",
      details: [
        {
          type: "subtitle",
          details: "Managing customer research tasks was a complicated and lengthy process.",
        },
        {
          type: "text",
          details:
            "With a small team, the lab was spending too much time manually inputting request information and juggling three different softwares. They needed a improved method to take in customer requests, manage their tasks, and then finally bill their customers.",
        },
        {
          type: "image",
          details: LabbyScreen,
        },
      ],
    },
    {
      title: "Solution",
      details: [
        {
          type: "subtitle",
          details: "Streamline form completion and ticket generation.",
        },
        {
          type: "text",
          details:
            "Labby integrates client form submission and internal ticket generation so each customer request submitted automatically creates a task on the lab’s ticket board. This will save the lab time and man-power.",
        },
        {
          type: "subtitle",
          details: "Maintain service cost and user information to automatically invoice customers.",
        },
        {
          type: "text",
          details:
            "Allowing the lab to organise client and services into defined groups mean that billing and invoicing can be automated.",
        },
        {
          type: "subtitle",
          details: "Centralise customer facing experiences.",
        },
        {
          type: "text",
          details:
            "Client confusion can be avoided by creating a single portal allowing them to submit requests and have access to their request information and progress.",
        },
      ],
    },
    {
      title: "Competitive Audit",
      details: [
        {
          type: "subtitle",
          details: "Other lab management systems are inflexible and expensive.",
        },
        {
          type: "text",
          details: "Most existing LIMS software do not allow for custom client cost settings and also require large upfront payments to cover the cost of features that do not align with the lab's needs.",
        },
        {
          type: "image",
          details: LabbyScreen2,
        },
      ],
    },
    {
      title: "User Research",
      details: [
        {
          type: "text",
          details:
            "We conducted user interviews with lab members to find out what they liked and disliked about their current process.",
        },
        {
          type: "focus",
          details: {
            title: "👩🏻‍🔬 Lab Member A",
            text: "\"We want to parallel the fuctions of JIRA which allow us to track requests and assign tasks.\"",
          },
        },
        {
          type: "focus",
          details: {
            title: "🧑🏾‍🔬 Lab Member B",
            text: "\"I spend 15-20 minutes each morning checking Qualtrics for submitted customer forms.\"",
          },
        },
        {
          type: "focus",
          details: {
            title: "👩🏼‍🔬 Lab Member C",
            text: "\"Combing through individual work entries on JIRA tickets is monotonous. I'd like to invoice more frequently, but with our current system it takes me 3 weeks to assemble quarterly bills.\"",
          },
        },
      ],
    },
    {
      title: "Design Solutions",
      details: [
        {
          type: "subtitle",
          details: "Customisable forms and automatic ticket generation",
        },
        {
          type: "text",
          details:
            "We created a drag-and-drop form builder allowing the lab to construct custom forms with a variety of components that they can provide to their clients. The form builder also allows for the addition of question display logic. Once the client submits the form, a ticket with correct details is automatically generated on the lab’s ticket board.",
        },
        {
          type: "image",
          details: LabbyScreen3,
        },
        {
          type: "subtitle",
          details: "Customisable forms and automatic ticket generation",
        },
        {
          type: "text",
          details:
            "The billing dashboard allows the lab to generate statistics and review their performance based on past clients, whilst also providing them with a flexible way to select completed services to generate invoices.",
        },
        {
          type: "image",
          details: LabbyScreen4,
        },
      ],
    },
    {
      title: "Final Product",
      details: [
        {
          type: "subtitle",
          details: "Labby has four main integral parts.",
        },
        {
          type: "text",
          details:
            "Labby is made up of a Form Builder, Ticket Board, Cost Administration page, and a Billing dashboard.",
        },
        {
          type: "image",
          details: LabbyScreen5,
        },
      ],
    },
    {
      title: "Learnings",
      details: [
        {
          type: "focus",
          details: {
            title: "Designing and implementing flexible and custom infrastructure gets complicated!",
            text: "As Labby is a custom software, we had to design text fields, cards, and type to be editable and cross-reference each other throughout different pages.",
          },
        },
        {
          type: "focus",
          details: {
            title: "Iteration and comunication and more iteration",
            text: "When designing custom software, it is important to not be afraid of iteration and feedback from the stakeholder. Being able to see what changes they needed was essential to make Labby a successful project.",
          },
        },
      ],
    },
  ];

  return (
    <div>
      <ProjectHeader project={"Labby"} description={"A Lab Management System for BC Cancer"} roles={["UI/UX Design","Design Lead"]} img={LabbyIntro} />
      <div>{BasePage(LabbyIntro, "#4E62C7", content)}</div>
    </div>
  );
  
}
