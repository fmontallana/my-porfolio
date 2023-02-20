import React from 'react'

export default function SliderTrack({ scrollType, children }) {
    return <div className={` group-hover:animation-pause flex lg:flex-col gap-4 w-[calc(300px * 4)] lg:h-[calc(384px * 4)] lg:w-86 px-5 lg:overflow-y-hidden  ${scrollType}`}>{children}</div>

}
