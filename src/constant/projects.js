import aflix1 from "../assets/images/aflix1.webp"
import aflix2 from "../assets/images/aflix2.webp"
import aflix3 from "../assets/images/aflix3.webp"
import aflix4 from "../assets/images/aflix4.webp"
import aflix1_org from "../assets/images/original/aflix1.webp"
import aflix2_org from "../assets/images/original/aflix2.webp"
import aflix3_org from "../assets/images/original/aflix3.webp"
import aflix4_org from "../assets/images/original/aflix4.webp"
import quote1 from "../assets/images/quote1.webp"
import quote2 from "../assets/images/quote2.webp"
import quote3 from "../assets/images/quote3.webp"
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

export const PROJECTS = [

    {
        title: "Quote Generator",
        description: "A project that generates random quotes from an API. It also allows you to tweet the quote. Created from a coding challenge from CodingSpaces.",
        tools: ["HTML", "CSS", "JavaScript", "API"],
        images: [quote1, quote2, quote3],
        imagesFull: [quote1, quote2, quote3],
        demo: "https://quote.fermontallana.studio/",
        github: "https://github.com/fmontallana/quote-generator"
    },
    {
        title: "aflix | Anime Streaming Site",
        description: "I built this website while learning NextJS 13 and Zustand. I want it to look like a modern anime streaming site. My biggest challenge in this project was implementing the states with server-side rendering.",
        tools: ["NextJS", "Tailwind", "API", "Zustand"],
        images: [aflix1, aflix2, aflix3, aflix4],
        imagesFull: [aflix1_org, aflix2_org, aflix3_org, aflix4_org],
        demo: "https://anime.fermontallana.studio/",
        github: "https://github.com/fmontallana/aniwatch"
    },
    {
        title: "FrostCity | HVAC Services",
        description: "This is a fullstack application and my very first freelance project. It is a reservation system with a landing page for a local HVAC company. I use firebase services like authentication and firestore for the database, TailwindCSS for the styling, and ReactJS for the frontend.",
        tools: ["ReactJS", "TailwindCSS", "Context API", "Firebase"],
        images: [fc1, fc2, fc3, fc4, fc5],
        imagesFull: [fc1_org, fc2_org, fc3_org, fc4_org, fc5_org],
        demo: "https://fcdemo.fermontallana.studio/",
        github: "https://github.com/fmontallana"
    },

]