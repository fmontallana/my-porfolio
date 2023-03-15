import React, { useEffect, useState } from 'react'
import { skills } from '../constant/skills';
import { motion } from 'framer-motion'
import { SiGithub, SiTplink } from 'react-icons/si';

export default function ProjectItem({ id, project }) {

    const [imageIndex, setImageIndex] = useState(0)

    let logos = []

    skills.map((skill) => logos = [...logos, ...skill.skills])

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setImageIndex(prev => prev === project?.imagesFull.length - 1 ? 0 : prev + 1)
        }, 2000)
        return () => {
            clearInterval(interval);
        }
    }, [project])

    return (
        <div className={`z-20 mb-10 flex flex-col-reverse ${id % 2 ? "lg:flex-row-reverse" : "lg:flex-row"} bg-slate-50 text-slate-700 lg:h-96 w-full lg:rounded-lg shadow-lg overflow-hidden border border-slate-300 `}>
            <div className='h-full w-full lg:flex-1 p-4'>
                <div className='h-full w-full flex flex-col justify-evenly items-start gap-2'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-xl lg:text-3xl font-semibold stretch-125'>{project.title}</h1>
                        <h3 className='text-sm text-slate-500/[0.9]'>{project.subTitle}</h3>
                        <div className='flex flex-wrap gap-1 '>
                            {project.tools.map(tool => {

                                const logo = logos?.find((logo) => logo?.name === tool)?.icon
                                const Icon = logo ? logo : null
                                return (<div key={logo} className='flex-shrink-0 flex justify-center items-center gap-1 text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded-md'>
                                    {logo && <Icon />}
                                    <span>{tool}</span>
                                </div>)
                            })}
                        </div>
                    </div>

                    <p className='text-sm lg:text-base text-slate-600'>{project.description}</p>
                    <div className=" flex justify-start items-center gap-2">
                        {project.demo?.length > 0 && <a href={project?.demo} target="_blank" referrerPolicy="" className="flex justify-center items-center gap-1 text-white h-7 px-2 border border-cyan-500 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded text-sm font-semibold hover:from-cyan-400 hover:to-cyan-500">Live Demo <SiTplink /> </a>}
                        {project.github?.length > 0 && <a href={project?.github} target="_blank" referrerPolicy="" className="flex justify-center items-center gap-1 text-cyan-500 h-7 px-2 border border-cyan-500 rounded text-sm font-semibold hover:bg-white">Github Repo <SiGithub /></a>}
                    </div>
                </div>
            </div>
            <div className='h-52 lg:h-full lg:w-4/6 flex items-center overflow-hidden'>
                <motion.div
                    animate={{ x: `-${imageIndex}00%` }}
                    transition={{ duration: 0.5 }}
                    className={`h-full flex transition-transform lg:transition-none ease-in-out duration-1000 `}>
                    {project?.imagesFull?.map((image, i) => (
                        <div className='relative flex-shrink-0 h-full w-full flex justify-center items-start lg:items-center'>
                            <img class="h-52 sm:h-96 w-full object-cover" src={image} alt="image description" />
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
    )
}
