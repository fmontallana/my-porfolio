import { useEffect, useState } from "react"
import { skills } from "../constant/skills"

export default function Card({ project }) {

    if (!project) return null

    const [imageIndex, setImageIndex] = useState(0)
    const [isHover, setIsHover] = useState(false)

    let logos = []

    skills.map((skill) => logos = [...logos, ...skill.skills])

    useEffect(() => {
        let interval = null;
        if (isHover) {
            interval = setInterval(() => {
                setImageIndex(prev => prev === project?.images.length - 1 ? 0 : prev + 1)
            }, 1500)
        }
        console.log(imageIndex)
        return () => {
            clearInterval(interval);
        }
    }, [isHover])


    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`lg:h-[364px] w-[300px] max-w-[300px] pb-2 flex flex-col gap-2 justify-start  transition-transform ease-linear flex-shrink-0 bg-slate-50 rounded-lg overflow-hidden shadow hover:border-sky-300 border border-slate-300 `}>
            <div style={{ transform: `translateX(-${imageIndex}00%)` }} className={` flex transition-all ease-in-out duration-500`}>
                {/* <img src={`https://picsum.photos/seed/${Math.floor(Math.random() * 99)}/300/200`} alt="" /> */}
                {project?.images.map((img, index) => <div key={index} className={`relative flex-shrink-0 scale-105 aspect-video object-cover flex justify-center items-center`}><img src={img} width="300px" height="200px" /></div>)}
            </div>
            {/* card body */}
            <div className="h-full flex justify-around flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <p className="px-2 text-gray-900 font-semibold text-sm uppercase">{project?.title}</p>

                    <div className='px-2 flex flex-wrap gap-1 '>
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
                <p className="max-h-12 flex-1 px-2 text-gray-900 text-xs line-clamp-3 h-full ">{project?.description}</p>
                {/* buttons */}
                <div className="px-2 flex justify-start items-center gap-2">
                    <a href={project?.demo} target="_blank" referrerPolicy="" className="grid place-items-center text-white h-7 px-2 border border-cyan-500 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded text-sm font-semibold hover:from-cyan-400 hover:to-cyan-500">Live Demo</a>
                    <a href={project?.github} target="_blank" referrerPolicy="" className="grid place-items-center text-cyan-500 h-7 px-2 border border-cyan-500 rounded text-sm font-semibold hover:bg-slate-100">Github Repo</a>
                </div>
            </div>

        </div>
    )
}
