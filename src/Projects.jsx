import React, { useEffect, useState } from 'react'
import Blob from './components/Blob'
import { PROJECTS } from './constant/projects'

export default function Projects() {

    const [project, setProject] = useState(PROJECTS[1])
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setImageIndex(prev => prev === project?.imagesFull.length - 1 ? 0 : prev + 1)
        }, 2000)
        return () => {
            clearInterval(interval);
        }
    }, [project])

    const handleClick = (project) => {
        setProject(project)
        setImageIndex(0)
    }


    return (
        <div className='lg:h-full lg:w-9/12 mx-auto py-4 flex flex-col gap-4 justify-start items-center overflow-hidden'>
            <div className='z-[1]  hidden absolute flex-shrink-0 h-96 w-full lg:grid grid-cols-2 grid-rows-2 grid-flow-col '>
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
            <div className=' z-10 lg:container flex flex-col justify-center items-center w-full my-auto  '>

                <div className='relative w-full flex overflow-hidden lg:border-2 border-b-0 border-slate-300 lg:rounded-t-lg bg-slate-100'>
                    <div style={{ transform: `translateX(-${imageIndex}00%)` }} className={`flex transition-transform lg:transition-none ease-in-out duration-1000`}>
                        {project?.imagesFull?.map((image, i) => (
                            <div className='relative flex-shrink-0 h-96 lg:h-full w-full object-cover flex justify-center items-start lg:items-center'>
                                <img class="h-auto lg:max-w-full" src={image} alt="image description" />
                            </div>
                        ))}
                    </div>

                    <div className='absolute bottom-0 h-full w-full text-slate-100 bg-gradient-to-t from-gray-800/[0.5] to-transparent'></div>
                    <div className='absolute bottom-0 h-full w-full text-slate-100 bg-gradient-to-t from-gray-800 to-transparent'>
                        <div className='flex flex-col justify-end items-start gap-2 p-5 h-full lg:w-3/6'>
                            <h1 className='text-white text-lg font-semibold'>{project.title}</h1>
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

                <div className='z-10 flex h-16 lg:h-16 w-full border-2 border-t-0 border-slate-300 lg:rounded-b-lg overflow-hidden '>

                    {PROJECTS?.map((item, i) => (
                        <button type='button' onClick={() => handleClick(item)} className={`flex-1 h-full w-full bg-white grid place-items-center  lg:text-xl font-black stretch-75 hover:text-cyan-400 border-x ${item.title === project.title ? "text-sky-400 " : "text-slate-600"}`}>
                            <h1>{item.title}</h1>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
