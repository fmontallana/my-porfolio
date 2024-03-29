import React from 'react'
import { PROJECTS } from '../constant/projects'
import Card from './Card'
import SliderTrack from './SliderTrack'
import { FaFileDownload, FaProjectDiagram } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { AiTwotoneExperiment } from 'react-icons/ai'
import Blob from './Blob'
import CursorBlob from './CursorBlob'
import { SiLinkedin, SiMessenger, SiMinutemailer } from 'react-icons/si'

export default function Hero() {

    const Button = ({ title, icon: Icon, color }) => {

        const href = title === "Resume" ? "https://drive.google.com/drive/folders/1lvZWAv7kUqqsYpleUZfNGcxqufQ9PbEz?usp=share_link" : `/#${title.toLowerCase()}`
        const hover = color === "-sky-400" ? "hover:border-sky-400" : color === "-emerald-400" ? "hover:border-emerald-400" : color === "-rose-400" ? "hover:border-rose-400" : "hover:border-lime-400"
        const text = color === "-sky-400" ? "text-sky-400" : color === "-emerald-400" ? "text-emerald-400" : color === "-rose-400" ? "text-rose-400" : "text-lime-400"
        const border = color === "-sky-400" ? "border-sky-400" : color === "-emerald-400" ? "border-emerald-400" : color === "-rose-400" ? "border-rose-400" : "border-lime-400"
        const hoverBg = color === "-sky-400" ? "hover:bg-gradient-to-r from-sky-500 to-sky-300" :
            color === "-emerald-400" ? "hover:bg-gradient-to-r from-emerald-500 to-emerald-300" :
                color === "-rose-400" ? "hover:bg-gradient-to-r from-rose-500 to-rose-300" : "hover:bg-gradient-to-r from-lime-500 to-lime-300"

        return (
            <a href={href} className={`bg-white py-1 flex-shrink-0 gap-1 flex justify-center items-center text-xs  lg:text-sm ${text} hover:text-slate-100 font-semibold  w-20 h-10 lg:h-10 lg:w-28 shadow-lg rounded-lg border ${hoverBg} ${border} ${hover} ring-offset-2 ring-offset-slate-200 transition-colors ease-in-out duration-500`}>
                <Icon className='delay-[0.2]' size={16} />
                <span className='delay-[0.2]'>{title}</span>
            </a>
        )
    }

    const Char = ({ text, color }) => text.split("").map((char) => <p className={`hover:animate-bounce ${color} inline-block cursor-none`}>{char}</p>)


    return (
        <>
            <div className='absolute   h-full w-full z-[1] flex justify-center items-start overflow-x-hidden overflow-y-visible '>
                <Blob bgColor={"bg-lime-400"} size="h-48 w-48" />
                <Blob bgColor={"bg-rose-400"} size="h-52 w-52" />
                <Blob bgColor={"bg-cyan-400"} size="h-32 w-32" />
            </div>

            <section className="container mx-auto flex-shrink-0 w-full h-full flex flex-col lg:flex-row ">

                <div className="px-4 py-2 lg:py-10 text-slate-800 flex flex-col gap-14 justify-start sm:items-center lg:items-center flex-shrink-0  h-auto lg:h-full w-full lg:flex-1 " >
                    <div className='z-10 w-full flex justify-between items-center'>
                        <a href='/' className="self-start font-black stretch-125 text-gray-900 text-3xl z-20 hover:underline ">fm.</a>
                        <div className='flex justify-center items-center  border border-sky-400 rounded-full overflow-hidden'>
                            {/* <p className='text-transparent bg-clip-text bg-gradient-to-r lg:font-semibold from-cyan-500 to-pink-500 '>Connect</p> */}

                            <a href="mailto:fernandomontallana@gmail.com" target="_blank" referrerPolicy="" className="flex justify-center items-center gap-1 text-cyan-500 h-7 px-4  text-sm font-semibold hover:bg-slate-100">
                                <SiMinutemailer />
                            </a>
                            <a href="https://www.linkedin.com/in/fernando-montallana-jr-518a46206/" target="_blank" referrerPolicy="" className="flex justify-center items-center gap-1 text-cyan-500 h-7 px-4 border-l border-cyan-500 text-sm font-semibold hover:bg-slate-100">
                                <SiLinkedin />
                            </a>
                            <a href="https://m.me/friednando" target="_blank" referrerPolicy="" className="flex justify-center items-center gap-1 text-cyan-500 h-7 px-4 border-l border-cyan-500 text-sm font-semibold hover:bg-slate-100">
                                <SiMessenger />
                            </a>
                        </div>
                    </div>

                    <div className="z-[2] pt-32 lg:pt-20 text-slate-800 text-2xl lg:text-5xl flex flex-col sm:items-center sm:justify-center lg:justify-start lg:items-start select-none">

                        <div className=" w-full flex justify-start gap-2 lg:gap-4">
                            {"Hi! I am".split(" ").map((char, index) => <p key={index} className={'font-black lg:font-bold stretch-125'}>
                                <Char text={char} color="hover:text-sky-600" />
                            </p>)}
                        </div>
                        <div className="text-2xl lg:text-5xl w-full flex justify-start gap-2 lg:gap-4 lg:gap-0 lg:justify-between ">
                            {"Fernando Montallana".split(" ").map((char, index) => <p key={index} className={'font-black stretch-125 bg-clip-text text-transparent bg-gradient-to-tr from-sky-600 to-sky-400'}>
                                <Char text={char} color="hover:text-sky-600" />
                            </p>)}
                        </div>

                        <div className=" w-full flex justify-start lg:justify-between gap-2 lg:gap-4">
                            {"a front-end developer".split(" ").map((char, index) => <span key={index} className="font-black lg:font-bold stretch-125">
                                <Char text={char} color="hover:text-cyan-600" />
                            </span>)}
                        </div>
                        <div className=" w-full flex flex-wrap justify-start lg:justify-between gap-2 lg:gap-4">
                            {"specializes in ReactJS.".split(" ").map((char, index) => <span key={index} className={`font-black lg:font-bold stretch-125 ${char.toLowerCase() === "reactjs." && "font-black stretch-125 bg-clip-text text-transparent bg-gradient-to-tr from-cyan-600 to-cyan-400"}`}>
                                <Char text={char} color={char === "loves" ? "hover:text-red-600" : "hover:text-cyan-600"} />
                            </span>)}
                        </div>
                        <br />
                        {/* buttons */}
                        <div className="pb-20 w-full flex justify-start items-start sm:justify-start  gap-1 lg:gap-2 z-20">
                            <Button title="Skills" color="-lime-400" icon={GiSkills} />
                            <Button title="Projects" color="-sky-400" icon={FaProjectDiagram} />
                            <Button title="About" color="-emerald-400" icon={AiTwotoneExperiment} />
                            <Button title="Resume" color="-rose-400" icon={FaFileDownload} />
                        </div>
                    </div>


                </div>

                <div className="relative flex flex-col lg:flex-row justify-start  flex-shrink-0  h-full lg:h-screen w-full lg:w-3/12 overflow-hidden">
                    {/* scroll up */}
                    {/* <div className=" absolute  bg-transparent h-full w-full z-10"> */}
                    <div className="z-10 hidden lg:block absolute top-0 left-0 bg-gradient-to-b from-slate-200 to-transparent h-24 w-full"></div>
                    <div className="z-10 hidden lg:block absolute bottom-0 left-0 bg-gradient-to-t from-slate-200 to-transparent h-32 w-full -mb-5"></div>
                    <div className="z-10 hidden lg:block absolute bottom-0 left-0 bg-gradient-to-t from-slate-200 to-transparent h-32 w-full -mb-5"></div>
                    {/* </div> */}
                    <div className="z-[9] relative flex lg:flex-col lg:max-w-[340px] group">
                        <SliderTrack scrollType=" lg:animate-scrollUp1 animate-scrollLeft1">
                            {PROJECTS.map((project) => <Card project={project} />)}
                        </SliderTrack>
                        <SliderTrack scrollType="absolute lg:animate-scrollUp2 animate-scrollLeft2">
                            {PROJECTS.map((project) => <Card project={project} />)}
                        </SliderTrack>
                    </div>
                    {/* scroll down */}
                    {/* <div className="hidden lg:relative lg:flex lg:flex-col h-full lg:max-w-[340px] group overflow-hidden">
                        <SliderTrack scrollType="lg:animate-scrollDown1 animate-scrollRight1">
                            {PROJECTS.map((project) => <Card project={project} />)}
                        </SliderTrack>
                        <SliderTrack scrollType="absolute lg:animate-scrollDown2 animate-scrollRight2">
                            {PROJECTS.map((project) => <Card project={project} />)}
                        </SliderTrack>
                    </div> */}

                </div>
            </section>
        </>
    )
}
