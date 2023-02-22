import React from 'react'
import { skills } from './constant/skills'

export default function Skills() {

    const SkillCard = ({ category, items }) => {
        return <div className='h-full w-full p-4 bg-slate-100 rounded-lg shadow-lg flex justify-start items-center gap-4 flex-col '>
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
        <div className='container flex flex-col items-center h-full w-9/12 mx-auto py-10'>
            <h1 className='lg:self-start py-4 text-2xl font-bold stretch-125 text-slate-800'>My Skills</h1>
            <div className='lg:h-[70vh] w-full grid grid-cols-1 lg:grid-cols-4  gap-4 '>
                <div className='hidden lg:block bg-slate-100 rounded-lg shadow-lg row-span-6 col-span-2 '>

                </div>
                {
                    skills.map((skill, index) => {
                        return <div key={index} className={index === 2 ? "lg:row-span-3 lg:col-span-2 " : "lg:row-span-3"}><SkillCard category={skill.category} items={skill.skills} /></div>
                    })
                }


            </div>
        </div>
    )
}
