import React, { useEffect, useState } from 'react'

export default function CursorBlob({ size }) {




    return (
        <div className='absolute'>
            <div className={`absolute ${size} rounded-full  bg-slate-900`} />
        </div>
    )
}
