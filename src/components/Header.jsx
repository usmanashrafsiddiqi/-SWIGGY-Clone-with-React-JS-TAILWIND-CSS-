import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
export default function Header() {

    const [toggle, settoggle] = useState(false);



    const showsidemenu = () => {

        settoggle(true);
    }

const closesidemenu =()=>{
    settoggle(false);
}

    return (
        <>
            <div className='black-overplay w-full h-full fixed duration-500' onClick={closesidemenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div  onClick={ (e)=>{
                    e.stopPropagation();
                }} className='w-[500px] bg-white h-full absolute duration[400ms]' style={{
                    left: toggle ? "0%" : "-100%"
                }}>

                </div>
            </div>
            <header className='p-[15px] shadow-xl text-[#686b78] '>
                <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>

                    <div className='w-[100px]'>
                        <img src="/logo.png" className='w-full' alt="" />
                    </div>
                    <div className="">
                        <span className='font-bold border-b-[3px] border-[black]'>Ratanda</span>
                        Jodhpur, Rajastan,India
                        <RxCaretDown onClick={showsidemenu} fontSize={"25"} className=' inline  text-[#ff5200] cursor-pointer' />



                    </div>
                </div>
            </header>
        </>
    )
}
