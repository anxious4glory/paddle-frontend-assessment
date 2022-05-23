import Link from "next/link"
import { useState } from 'react'
import Image from "next/Image"

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-bgColor h-60">
            <div className="flex flex-col ml-4 p-8">
                <Link className="text-xl text-white my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                   <a className="uppercase">About</a>
                </Link>
                <Link className="text-xl text-white my-4" href="/blog" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                <a className="uppercase">Blog</a>
                </Link>
            </div>  
            </div>
            
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-bgColor flex filter drop-shadow-md px-20 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center bg-bgColor">
            
            <Image src="/logo.png" width={120} height={70}/>
            
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">

                    <Link href="/about">
                    <a className="mr-12 my-auto uppercase text-white">About Us</a>
                    </Link>

                    <Link href="/blog">
                    <a className="mr-12 my-auto uppercase text-white">Blog</a>
                    </Link>

                    <button type="button" className="text-white bg-btnBg
                    uppercase rounded-full px-4 py-1.5  ml-2 text-center inline-flex items-center">
                    <Link href="/contact">
                    <a>Contact Us</a>
                    </Link>
                    </button>

                </div>
            </div>
        </nav>
    )
}