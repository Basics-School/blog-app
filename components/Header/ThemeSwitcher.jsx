'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <select className='bg-black dark:bg-slate-800 cursor-pointer text-center text-white px-3 py-2 appearance-none outline-none  rounded-xl ' value={theme} onChange={e => setTheme(e.target.value)}>
            <option className="appearance-none text-startbg-white" value="system">System</option>
            <option className="appearance-none text-start hover:bg-white" value="dark">Dark</option>
            <option className="appearance-none text-start hover:bg-white" value="light">Light</option>
        </select>
    )
}

export default ThemeSwitcher