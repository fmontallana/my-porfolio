import React from 'react'
import { SiLinkedin, SiMessenger, SiMinutemailer } from 'react-icons/si'

export default function About() {
    return (
        <div className='container flex flex-col items-center h-full w-11/12 lg:w-9/12 mx-auto py-2'>
            <h1 className='lg:self-start py-4 text-2xl font-bold stretch-125 text-slate-800'>About Me</h1>
            <div className='flex flex-col items-start lg:flex-row h-full w-full py-4 gap-4 text-center lg:text-left'>

                <div className='flex-1 leading-loose text-justify'>
                    Hi! 👋 I'm <span className='font-semibold'>Fernando</span>, a <span className='font-semibold'>ReactJS</span> enthusiast and front-end developer. Although I'm knowledgeable in backend development, I prefer to work as a front-end developer. < span className='font-semibold'>I love learning new technologies and developing attractive, responsive web applications.</span> I also love video games and anime a lot.
                </div>
                <hr className='w-full lg:hidden border border-slate-300' />
                <div className='flex-1 flex flex-col justify-start items-center gap-4'>
                    <p className='text-slate-800 font-semibold'>Always down to
                        exchange ideas and explore collaborations</p>

                    <p className='text-transparent bg-clip-text bg-gradient-to-r lg:font-semibold from-cyan-500 to-pink-500 '>Let's Connect! ↓</p>
                    <div className=" flex justify-start items-center gap-2">
                        <a href="mailto:fernandomontallana@gmail.com" referrerPolicy="" className="flex justify-center items-center gap-1 text-white h-7 px-2 border border-cyan-500 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded text-sm font-semibold hover:from-cyan-400 hover:to-cyan-500">
                            Email
                            <SiMinutemailer />
                        </a>
                        <a href="https://www.linkedin.com/in/fernando-montallana-jr-518a46206/" target="_blank" referrerPolicy="" className="flex justify-center items-center gap-1 text-cyan-500 h-7 px-2 border border-cyan-500 rounded text-sm font-semibold hover:bg-slate-100">
                            LinkedIn
                            <SiLinkedin />
                        </a>
                        <a href="https://m.me/friednando" target="_blank" referrerPolicy="" className="flex justify-center items-center gap-1 text-cyan-500 h-7 px-2 border border-cyan-500 rounded text-sm font-semibold hover:bg-slate-100">
                            Messenger
                            <SiMessenger />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
