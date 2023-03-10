import React, { useEffect, useRef, useState } from 'react'
import { skills } from './constant/skills'
import { motion } from 'framer-motion'
import SkillBubble from './components/SkillBubble'

export default function Skills() {

    let logos = []
    const ref = useRef(null)

    skills.map((skill) => logos = [...logos, ...skill.skills])

    const SkillCard = ({ category, items }) => {
        return <div className='h-full w-full p-4 bg-gradient-to-tr from-slate-100 to-slate-50  rounded-lg shadow-lg flex justify-start items-center gap-4 flex-col '>
            <h3>{category}</h3>
            <div className='flex justify-center items-center flex-wrap gap-2'>
                {
                    items?.map((item, index) => {
                        const Icon = item.icon
                        return <div class={`${item.color} bg-slate-200 flex-shrink-0 flex flex-col gap-1 justify-center items-center w-16 h-16 border border-slate-300 rounded `}>
                            <Icon size={20} />
                            <span className='text-xs text-slate-700'>{item.name}</span>
                        </div>
                    })
                }
            </div>
        </div>
    }

    return (
        <div className='container flex flex-col items-center h-full px-4 lg:px-0 lg:w-9/12 mx-auto py-10'>
            <h1 className='z-10 lg:self-start py-4 text-xl lg:text-2xl font-bold stretch-125 text-slate-800'>My Favorite Tools</h1>
            <div className='z-10 lg:h-[70vh] w-full grid grid-cols-1 lg:grid-cols-4  gap-4 '>
                <div className='h-full w-full hidden lg:flex flex-col  bg-gradient-to-tr from-slate-100 to-slate-50 rounded-lg shadow-lg row-span-6 col-span-2 p-4'>
                    <p className='text-sm text-slate-700 leading-loose text-justify'>I tried many programming languages like <span className='text-slate-800 font-semibold'>C++, Java, C#, PHP, Javascript, and Python</span>. I made a small program out of it. But, I ended up liking <span className='text-slate-800 font-semibold'>web development</span>. Then I discovered <span className='text-slate-800 font-semibold'>ReactJS</span>; all I can say is I love it. I'm looking forward to trying other tech stacks too.<span className='text-slate-800 font-semibold'> For now, here are the technologies I've been working with.</span></p>
                    <div ref={ref} className='relative h-full w-full flex-1 overflow-hidden'>
                        {logos.reverse().map((logo, index) => {
                            return <SkillBubble key={index} logo={logo} parentRef={ref} />
                        })}
                        <p className="absolute text-slate-500 text-xs bottom-0">larger bubble = most proficient</p>
                    </div>
                </div>
                {
                    skills.map((skill, index) => {
                        return <div key={index} className={index === 2 ? "lg:row-span-3 lg:col-span-2 " : "lg:row-span-3"}><SkillCard category={skill.category} items={skill.skills} /></div>
                    })
                }
            </div>
            <div className='z-[1] absolute  h-full w-full grid place-items-center animate-pulse overflow-x-hidden lg:overflow-visible'>
                <div className='bg-sky-500/10 blur-3xl h-[75%] lg:h-[100%] aspect-square rounded-full'></div>
            </div>
        </div>
    )
}
