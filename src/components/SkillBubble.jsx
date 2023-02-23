import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'

export default function SkillBubble({ logo, parentRef: ref }) {

    const Icon = logo.icon
    const [x, setX] = useState(Math.floor(Math.random() * 380))
    const [y, setY] = useState(Math.floor(Math.random() * 220))
    const isInView = useInView(ref, { once: true, threshold: 0.5 })
    useEffect(() => {
        const interval = setInterval(() => {
            setX(Math.floor(Math.random() * 380 + 20))
            setY(Math.floor(Math.random() * 200 + 20))
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <AnimatePresence>
            {isInView && <motion.div
                initial={{ opacity: 0, x: "-50%", y: "-50%", left: "50%", top: "50%", }}
                animate={{ opacity: 1, x, y, left: 0, top: 0, }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, type: "keyframes" }}
                className={`absolute shrink-0 ${logo.color} p-2 flex justify-center items-center flex-col gap-1 rounded-full bg-slate-100/80 border border-sky-600 origin-center`}>
                <Icon size={logo.size | 25} />
            </motion.div>}
        </AnimatePresence>
    )
}
