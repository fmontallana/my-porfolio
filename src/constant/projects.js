import aflix1 from "../assets/images/aflix1.webp"
import aflix2 from "../assets/images/aflix2.webp"
import aflix3 from "../assets/images/aflix3.webp"
import aflix4 from "../assets/images/aflix4.webp"
import aflix1_org from "../assets/images/original/aflix1.webp"
import aflix2_org from "../assets/images/original/aflix2.webp"
import aflix3_org from "../assets/images/original/aflix3.webp"
import aflix4_org from "../assets/images/original/aflix4.webp"
import fc1 from "../assets/images/fc1.webp"
import fc2 from "../assets/images/fc2.webp"
import fc3 from "../assets/images/fc3.webp"
import fc4 from "../assets/images/fc4.webp"
import fc5 from "../assets/images/fc5.webp"
import fc1_org from "../assets/images/original/fc1.webp"
import fc2_org from "../assets/images/original/fc2.webp"
import fc3_org from "../assets/images/original/fc3.webp"
import fc4_org from "../assets/images/original/fc4.webp"
import fc5_org from "../assets/images/original/fc5.webp"
import fp1 from "../assets/images/original/fp1.webp"
import fp2 from "../assets/images/original/fp2.webp"
import fp3 from "../assets/images/original/fp3.webp"
import fp4 from "../assets/images/original/fp4.webp"
import fp1_small from "../assets/images/fp1-small.webp"
import fp2_small from "../assets/images/fp2-small.webp"
import fp3_small from "../assets/images/fp3-small.webp"
import fp4_small from "../assets/images/fp4-small.webp"
import brobot1 from "../assets/images/original/brobot1.webp"
import brobot2 from "../assets/images/original/brobot2.webp"
import brobot1_small from "../assets/images/brobot1-small.png"
import brobot2_small from "../assets/images/brobot2-small.png"

export const PROJECTS = [
    {
        title: "FrostCity",
        subTitle: "HVAC Reservation System",
        description: "This is a fullstack application and my very first freelance project. It is a reservation system with a landing page for a local HVAC company. I use firebase services like authentication and firestore for the database, TailwindCSS for the styling, and ReactJS for the frontend.",
        tools: ["ReactJS", "Tailwind", "Context API", "Firebase"],
        images: [fc1, fc2, fc3, fc4, fc5],
        imagesFull: [fc1_org, fc2_org, fc3_org, fc4_org, fc5_org],
        demo: "https://fcdemo.vercel.app/",
        github: "https://github.com/fmontallana/fcdemo"
    },
    {
        title: "aflix",
        subTitle: "Anime Streaming Site UI",
        description: "I built this website while learning NextJS 13 and Zustand. I want it to look like a modern anime streaming site. My biggest challenge in this project was implementing the states with server-side rendering.",
        tools: ["NextJS", "Tailwind", "API", "Zustand"],
        images: [aflix1, aflix2, aflix3, aflix4],
        imagesFull: [aflix1_org, aflix2_org, aflix3_org, aflix4_org],
        demo: "https://aflix.fermontallana.studio/",
        github: "https://github.com/fmontallana/aniwatch"
    },
    {
        title: "Brobot",
        subTitle: "Chatbot with AI",
        description: "I implement OpenAI ChatGPT API in this project. It emulates human like conversations. It can respond in Filipino with some Conyo style and slang words. It can also use emojis to express emotions.",
        tools: ["ReactJS", "Tailwind", "Zustand", "Firebase", "MongoDB", "ExpressJS", "NodeJS"],
        images: [brobot1_small, brobot2_small],
        imagesFull: [brobot1, brobot2],
        demo: "https://brobot.fermontallana.studio/",
        github: ""
    },
    {
        title: "Portfolio",
        subTitle: "My Portfolio Website",
        description: "This is my portfolio website. Simple yet elegant, utilizing the gradient colors. I built it with ReactJS and TailwindCSS. I also used Framer Motion for some animations.",
        tools: ["ReactJS", "Tailwind", "Framer Motion"],
        images: [fp1_small, fp2_small, fp3_small, fp4_small],
        imagesFull: [fp1, fp2, fp3, fp4],
        demo: "",
        github: "https://github.com/fmontallana/my-porfolio"
    },
    // {
    //     title: "Quote Generator",
    //     description: "A project that generates random quotes from an API. It also allows you to tweet the quote. Created from a coding challenge from CodingSpaces.",
    //     tools: ["HTML", "CSS", "JavaScript", "API"],
    //     images: [quote1, quote2, quote3],
    //     imagesFull: [quote1, quote2, quote3],
    //     demo: "https://quote.fermontallana.studio/",
    //     github: "https://github.com/fmontallana/quote-generator"
    // },
]
