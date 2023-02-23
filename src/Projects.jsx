import React, { useEffect, useState } from 'react'
import Blob from './components/Blob'
import { PROJECTS } from './constant/projects'
import { skills } from './constant/skills'
import { motion } from 'framer-motion'
import ProjectItem from './components/ProjectItem'

export default function Projects() {


    return (
        <div className='lg:h-full lg:w-9/12 py-4 mx-auto flex flex-col gap-8 justify-start items-center'>
            <div className='z-[1]  hidden absolute flex-shrink-0 h-[200%] w-full lg:grid grid-cols-2 grid-rows-2 grid-flow-col overflow-x-hidden '>
                <div className=" w-full h-full col-span-1">
                    <Blob bgColor={"bg-sky-400/[0.5]"} size="h-80 w-80" />
                </div>
                <div className=" w-full h-full col-span-1">
                    <Blob bgColor={"bg-lime-400/[0.5]"} size="h-64 w-64" />
                </div>
                <div className=" w-full h-full col-span-1">
                    <Blob bgColor={"bg-rose-400/[0.5]"} size="h-64 w-64" />
                </div>
                <div className=" w-full h-full col-span-1">
                    <Blob bgColor={"bg-cyan-400/[0.5]"} size="h-80 w-80" />
                </div>
            </div>
            <h1 className='lg:self-start text-2xl font-bold stretch-125 text-slate-800'>My Projects</h1>

            {PROJECTS.reverse().map((project, i) => <ProjectItem key={i} project={project} />)}
        </div>
    )
}
