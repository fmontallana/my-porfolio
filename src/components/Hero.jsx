import React from 'react'
import { PROJECTS } from '../constant/projects'
import Card from './Card'
import SliderTrack from './SliderTrack'

export default function Hero() {

    const Button = ({ title }) => <button className="flex-shrink-0 flex justify-center items-end  text-gray-500 font-semibold h-20 w-28  rounded-lg shadow bg-slate-50 hover:ring  hover:ring-indigo-400 ring-offset-2 ring-offset-slate-200 transition-all ease-in-out duration-300">{title}</button>

    const Char = ({ text, color }) => text.split("").map((char) => <p className={`hover:animate-bounce ${color} inline-block cursor-none`}>{char}</p>)
    return (
        <section className=" w-full h-full flex flex-col lg:flex-row overflow-y-hidden">
            <div className=" px-4 py-2 lg:py-10 lg:px-10 text-gray-900 flex flex-col gap-6 justify-start items-start flex-shrink-0  h-5/6 lg:h-full w-full lg:w-3/6 " >
                <p className="font-black stretch-125 text-gray-800 text-3xl z-20 ">fm.</p>
                <div className="py-16 text-2xl lg:text-5xl w-full flex flex-col select-none">
                    <div className=" w-full flex justify-start gap-5">
                        {"Hi! I am".split(" ").map((char, index) => <p key={index} className={'font-bold stretch-125'}>
                            <Char text={char} color="hover:text-sky-600" />
                        </p>)}
                    </div>
                    <p className={'text-4xl lg:text-6xl font-black stretch-125 bg-clip-text text-transparent bg-gradient-to-tr from-sky-600 to-sky-400 '}>
                        <Char text={"Fernando"} color="hover:text-sky-600" />
                    </p>
                    <p className={'text-4xl lg:text-6xl font-black stretch-125 bg-clip-text text-transparent bg-gradient-to-tr from-sky-600 to-sky-400 '}>
                        <Char text={"Montallana"} color="hover:text-sky-600" />
                    </p>

                    <div className=" w-full flex justify-start gap-5">
                        {"a front-end developer".split(" ").map((char, index) => <span key={index} className="font-bold stretch-125">
                            <Char text={char} color="hover:text-cyan-600" />
                        </span>)}
                    </div>
                    <div className=" w-full flex justify-start gap-5">
                        {"who loves ReactJS.".split(" ").map((char, index) => <span key={index} className={`font-bold stretch-125 ${char.toLowerCase() === "reactjs." && "font-black stretch-125 bg-clip-text text-transparent bg-gradient-to-tr from-cyan-600 to-cyan-400"}`}>
                            <Char text={char} color={char === "loves" ? "hover:text-red-600" : "hover:text-cyan-600"} />
                        </span>)}
                    </div>
                </div>
                {/* buttons */}
                <div className="hidden w-full lg:flex justify-start gap-6 pb-20 z-20">
                    <Button title="Résumé " />
                    <Button title="Skills" />
                    <Button title="Projects" />
                    <Button title="Experience" />
                </div>
            </div>

            <div className=" flex flex-col lg:flex-row justify-start  flex-shrink-0  h-full lg:h-screen w-full lg:w-3/6 ">
                {/* scroll up */}
                {/* <div className=" absolute  bg-transparent h-full w-full z-10"> */}
                <div className="z-10 hidden lg:block absolute top-0 left-0 bg-gradient-to-b from-slate-200 to-transparent h-24 w-full"></div>
                <div className="z-10 hidden lg:block absolute bottom-0 left-0 bg-gradient-to-t from-slate-200 to-transparent h-32 w-full -mb-5"></div>
                <div className="z-10 hidden lg:block absolute bottom-0 left-0 bg-gradient-to-t from-slate-200 to-transparent h-32 w-full -mb-5"></div>
                {/* </div> */}
                <div className="h-full lg:max-w-[340px] group overflow-hidden">
                    <SliderTrack scrollType="lg:animate-scrollUp animate-scrollLeft">
                        {PROJECTS.map((project) => <Card project={project} />)}
                        {PROJECTS.map((project) => <Card project={project} />)}
                    </SliderTrack>
                </div>
                {/* scroll down */}
                <div className="hidden lg:max-w-[340px] lg:block group overflow-y-hidden">
                    <SliderTrack scrollType="lg:animate-scrollDown animate-scrollRight">
                        {PROJECTS.map((project) => <Card project={project} />)}
                        {PROJECTS.map((project) => <Card project={project} />)}
                    </SliderTrack>
                </div>

            </div>
        </section>
    )
}
