import React from 'react'

export default function SliderTrack({ scrollType, children }) {
    return <div className={` pb-10 group-hover:animation-pause flex lg:flex-col gap-4 w-[calc(300px * 4)] lg:h-auto lg:w-86 px-2 ${scrollType}`}>{children}</div>

}
