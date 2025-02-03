import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
export default function Header() {

    const [toggle, settoggle] = useState(false);



    const showsidemenu = () => {

        settoggle(true);
    }

    const closesidemenu = () => {
        settoggle(false);
    }


    const links = [
        {
            icons: <CiSearch />,
            name: "Search"
        },
        {
            icons: <CiDiscount1 />,
            name: "Offers",
            supertext:"new"
        },
        {
            icons:<IoIosHelpBuoy /> ,
            name: "Help"
        },
        {
            icons: <MdOutlineFollowTheSigns />,
            name: "Sign in"
        },
        {
            icons: <LuShoppingCart />,
            name: "Cart",
             supertext:"0"
        },
    ]

    return (
        <>
            <div className='black-overplay w-full h-full fixed duration-500' onClick={closesidemenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[500px] bg-white h-full absolute duration[400ms]' style={{
                    left: toggle ? "0%" : "-100%"
                }}>

                </div>
            </div>
            <header className='p-[15px] shadow-xl text-[#686b78]  sticky top-0  bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto  flex items-center'>

                    <div className='w-[100px]'>
                        <img src="/logo.png" className='w-full' alt="" />
                    </div>
                    <div className="">
                        <span className='font-bold border-b-[3px] border-[black]'>Ratanda</span>
                        Jodhpur, Rajastan,India
                        <RxCaretDown onClick={showsidemenu} fontSize={"25"} className=' inline  text-[#ff5200] cursor-pointer' />
                    </div>

                    <nav className='  hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold'>
                        {
                            links.map((link, index) => {
                                return (

                                    <li  key={index}className='flex cursor-pointer hover:text-[#ff5200]  items-center gap-2' >

                                        {link.icons}
                                        {link.name}
                                       <sup> {link.supertext}</sup>
                                    </li>

                                )

                            })}



                    </nav>

                </div>

            </header>
           
        </>
    )
}
