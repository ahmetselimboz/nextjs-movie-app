"use client"

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineWbSunny  } from "react-icons/md";

const ThemeComp = () => {

    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme

    return (

        <div>
            {
                mounted && (themeMode === "dark" ?
                    <MdOutlineWbSunny onClick={()=> setTheme("light")}  size={25} className='cursor-pointer text-white '  />
                    :
                    <MdOutlineDarkMode onClick={()=> setTheme("dark")} size={25} className='cursor-pointer dark:text-white text-neutral-900' />

                )
            }

        </div>
    )
}

export default ThemeComp