import aflix1 from "../assets/images/aflix1.jpeg"
import aflix2 from "../assets/images/aflix2.jpeg"
import aflix3 from "../assets/images/aflix3.jpeg"
import aflix4 from "../assets/images/aflix4.jpeg"
import aflix1_org from "../assets/images/original/aflix1.png"
import aflix2_org from "../assets/images/original/aflix2.png"
import aflix3_org from "../assets/images/original/aflix3.png"
import aflix4_org from "../assets/images/original/aflix4.png"
import quote1 from "../assets/images/quote1.png"
import quote2 from "../assets/images/quote2.png"
import quote3 from "../assets/images/quote3.png"
import fc1_org from "../assets/images/original/fc1.png"
import fc2_org from "../assets/images/original/fc2.png"
import fc3_org from "../assets/images/original/fc3.png"
import fc4_org from "../assets/images/original/fc4.png"
import fc5_org from "../assets/images/original/fc5.png"

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
        title: "aflix | anime streaming site",
        description: "A streaming site for anime build with modern UI. It uses the Consumet API to fetch anime data and cover photos.",
        tools: ["NextJS", "Tailwind", "API", "Zustand"],
        images: [aflix1, aflix2, aflix3, aflix4],
        imagesFull: [aflix1_org, aflix2_org, aflix3_org, aflix4_org],
        demo: "https://anime.fermontallana.studio/",
        github: "https://github.com/fmontallana/aniwatch"
    },
    {
        title: "FrostCity | HVAC Services",
        description: "A website with reservation system for a local HVAC company. It has a landing page, services page, contact page, and about page.",
        tools: ["ReactJS", "TailwindCSS", "Context API", "Firebase"],
        images: [aflix1, aflix2, aflix3, aflix4],
        imagesFull: [fc1_org, fc2_org, fc3_org, fc4_org, fc5_org],
        demo: "https://fcdemo.fermontallana.studio/",
        github: "https://github.com/fmontallana"
    },

]