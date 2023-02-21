import React, { useEffect, useState } from 'react'

export default function Blob({ bgColor, size = "h-52 w-52" }) {

    const [x, setX] = useState(Math.floor(Math.random() * 100))
    const [y, setY] = useState(Math.floor(Math.random() * 100))

    useEffect(() => {
        const interval = setInterval(() => {
            setX(Math.floor(Math.random() * 100))
            setY(Math.floor(Math.random() * 100))
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <div style={{ transform: `translate(${x}%, ${y}%)` }} className={`absolute ${bgColor} rounded-full ${size} blur-3xl transition-transform ease-linear duration-[2000ms]`} />
    )
}
