"use client"
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { MdMovie } from "react-icons/md";
import { FaRegHeart, FaUser } from "react-icons/fa";
import MenuItem from './MenuItem';
import Link from 'next/link';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';





const Header = () => {

    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        },

    ]

    const searchEnterFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {

            router.push(`/search/${keyword}`)
            setKeyword("")
        }
    }
    const searchClickFunc = () => {
        if (keyword.length >= 3) {

            router.push(`/search/${keyword}`)
            setKeyword("")
        }
    }

    return (
        <div className='flex items-center gap-7 h-20 py-5 px-8 '>
            <Link href="/" className='flex items-center gap-1 text-teal-600 text-2xl p-3 font-bold '><MdMovie size={50} />MovieApp</Link>
            <div className='flex flex-1 items-center gap-2  '>
                <input onKeyDown={searchEnterFunc} onChange={e => setKeyword(e.target.value)} placeholder='Search...' type="text" className='border rounded-lg outline-none flex-1 px-3 py-2' />
                <BiSearch onClick={searchClickFunc} className='-translate-x-11 cursor-pointer' size={25} />
            </div>
            {
                menu.map((mn, i) => (
                    <MenuItem mn={mn} key={i} />
                ))
            }
            <ThemeComp />
            <div className='flex items-center gap-8'>
                <FaRegHeart size={25} className='text-rose-700 cursor-pointer' />

                <div className='w-[40px] h-[40px] rounded-full bg-gray-500 border flex items-center justify-center cursor-pointer'>
                    <FaUser size={25} className='text-white' />
                </div>
            </div>

        </div>
    )
}

export default Header