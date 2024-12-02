"use client";

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggle: React.FC = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <>
        <button className='p-10' onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />}
        </button>
    </>
}

export default ThemeToggle;
