import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoReact,
    IoLogoNodejs,
    IoLogoFirebase,
    IoLogoNpm,
    IoLogoGithub,
    IoGitBranch
} from 'react-icons/io5';
import {
    SiMongodb,
    SiExpress,
    SiRedux,
    SiTailwindcss,
    SiStyledcomponents,
    SiCloudflare,
    SiFigma
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const skills = [
    {
        category: 'Frontend 😍',
        skills: [
            {
                name: 'ReactJS',
                icon: IoLogoReact,
                color: 'text-blue-400',
                size: 64
            },
            {
                name: 'NextJS',
                icon: TbBrandNextjs,
                color: 'text-black',
                size: 40
            },
            {
                name: 'JavaScript',
                icon: IoLogoJavascript,
                color: 'text-yellow-400',
                size: 45
            },
            {
                name: 'Zustand',
                icon: SiRedux,
                color: 'text-purple-400',
                size: 30
            },
            {
                name: 'HTML',
                icon: IoLogoHtml5,
                color: 'text-red-400',
                size: 45
            },
            {
                name: 'CSS',
                icon: IoLogoCss3,
                color: 'text-blue-400',
                size: 45
            },
            {
                name: 'Tailwind',
                icon: SiTailwindcss,
                color: 'text-blue-400',
                size: 45
            },
            {
                name: 'Styled',
                icon: SiStyledcomponents,
                color: 'text-pink-400',
                size: 30
            },
        ]
    },
    {
        category: 'Backend 🙂',
        skills: [
            {
                name: 'Node',
                icon: IoLogoNodejs,
                color: 'text-green-400'
            },
            {
                name: 'Express',
                icon: SiExpress,
                color: 'text-blue-400'
            },
            {
                name: 'Firebase',
                icon: IoLogoFirebase,
                color: 'text-yellow-400',
                size: 40
            },
        ]
    },
    {
        category: 'Some technologies I knew 😊',
        skills: [
            {
                name: 'Git',
                icon: IoGitBranch,
                color: 'text-red-400'
            },
            {
                name: 'GitHub',
                icon: IoLogoGithub,
                color: 'text-black'
            },
            {
                name: 'Cloudflare',
                icon: SiCloudflare,
                color: 'text-orange-400'
            },
            {
                name: 'Figma',
                icon: SiFigma,
                color: 'text-violet-400',
                size: 30
            },
        ]
    },
];

