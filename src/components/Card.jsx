import { useEffect, useState } from "react"

export default function Card({ project }) {

    if (!project) return null

    console.log(project?.tools)
    const [translateX, setTranslateX] = useState(0)
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        let interval = null;
        if (isHover) {
            interval = setInterval(() => {
                setTranslateX(prev => prev === project?.images.length - 1 ? 0 : prev + 1)
            }, 500)
        }
        return () => {
            clearInterval(interval);
        }
    }, [isHover])


    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`w-[260px] lg:w-[300px] max-w-[300px] pb-2 flex flex-col gap-2 justify-start  transition-transform ease-linear flex-shrink-0 bg-slate-50 rounded-lg overflow-hidden shadow hover:border-sky-300 border border-slate-300 `}>
            <div className={`translate-x-[${translateX}px] flex transition-all ease-in duration-300`}>
                {/* <img src={`https://picsum.photos/seed/${Math.floor(Math.random() * 99)}/300/200`} alt="" /> */}
                {project?.images.map((img, index) => <div key={index} className={`${index !== translateX && "hidden"}     flex-shrink-0 scale-105 aspect-video object-cover grid place-items-center w-[300px]`}><img src={img} width="300px" height="200px" /></div>)}
            </div>
            {/* card body */}
            <div className="flex flex-col gap-2">
                <p className="px-2 text-gray-900 font-semibold text-sm uppercase">{project?.title}</p>
                {project?.tools.length !== 0 && <div className="px-2 text-xs  flex flex-wrap justify-start items-center gap-1">
                    {project?.tools?.map(tool => <p className="flex-shrink-0 bg-gradient-to-r from-sky-500 to-sky-400 px-2 text-white rounded">{tool}</p>)}
                </div>}
                <p className="flex-1 px-2 text-gray-900 text-xs">{project?.description}</p>
            </div>
            {/* buttons */}
            <div className="px-2 flex justify-start items-center gap-2">
                <a href={project?.demo} target="_blank" referrerPolicy="" className="grid place-items-center text-white h-7 px-2 border border-indigo-500 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded text-sm font-semibold">Live Demo</a>
                <a href={project?.github} target="_blank" referrerPolicy="" className="grid place-items-center text-indigo-500 h-7 px-2 border border-indigo-500 rounded text-sm font-semibold">Github Repo</a>
            </div>
        </div>
    )
}
