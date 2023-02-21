import React, { useState } from 'react'
import Blob from './components/Blob'
import { PROJECTS } from './constant/projects'

export default function Projects() {

    const [project, setProject] = useState(PROJECTS[1])

    return (
        <>
            <div className='z-[1] hidden absolute flex-shrink-0 h-full w-full lg:grid grid-cols-2 grid-rows-2 grid-flow-col overflow-hidden'>
                {/* {[...Array(4)].map((_, i) => (
                    <div className=" w-full h-full col-span-1">
                        <Blob bgColor={"bg-sky-400/[0.5]"} size="h-64 w-64" />
                    </div>
                ))} */}
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
            <div className='lg:h-full lg:w-9/12 mx-auto flex flex-col justify-center items-center overflow-hidden'>

                <div className=' z-10 flex-1 lg:container flex flex-col justify-center items-center w-full my-auto  '>
                    <div className='relative w-full flex overflow-hidden border-2 border-b-0 border-slate-300 rounded-t-lg bg-slate-100'>

                        {project?.imagesFull?.map((image, i) => (
                            <div className='relative flex-shrink-0 h-96 lg:h-full w-full object-cover flex justify-center items-start lg:items-center'>
                                <img class="h-auto lg:max-w-full" src={image} alt="image description" />
                            </div>
                        ))}
                        <div className='absolute bottom-0 h-full w-full text-slate-100 bg-gradient-to-t from-gray-800/[0.5] to-transparent'></div>
                        <div className='absolute bottom-0 h-full w-full text-slate-100 bg-gradient-to-t from-gray-800 to-transparent'>
                            <div className='flex flex-col justify-end items-start gap-2 p-5 h-full lg:w-3/6'>
                                <h1 className='text-white text-lg font-semibold shadow'>{project.title}</h1>
                                <div className='flex flex-wrap gap-1'>
                                    {project.tools.map((tool, i) => (
                                        <span className='px-2 text-slate-100 text-xs rounded bg-gradient-to-r from-sky-500 to-sky-400'>{tool}</span>
                                    ))}
                                </div>
                                <p className='text-sm'>{project.description}</p>
                                <div className=" flex justify-start items-center gap-2">
                                    <a href={project?.demo} target="_blank" referrerPolicy="" className="grid place-items-center text-white h-7 px-2 border border-cyan-500 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded text-sm font-semibold hover:from-cyan-400 hover:to-cyan-500">Live Demo</a>
                                    <a href={project?.github} target="_blank" referrerPolicy="" className="grid place-items-center text-cyan-500 h-7 px-2 border border-cyan-500 rounded text-sm font-semibold hover:bg-slate-100">Github Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='z-10 flex h-16 lg:h-24 w-full border-2 border-t-0 border-slate-300 rounded-b-lg overflow-hidden '>

                        {PROJECTS?.map((item, i) => (
                            <button type='button' onClick={() => setProject(item)} className={`flex-1 h-full w-full bg-white grid place-items-center  lg:text-xl font-black stretch-75 hover:text-cyan-400 border-x ${item.title === project.title ? "text-sky-400 " : "text-slate-600"}`}>
                                <h1>{item.title}</h1>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
