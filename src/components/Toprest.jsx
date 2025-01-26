import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card'

export default function Toprest() {

    const [data, setdata] = useState([]);


    const fetchrestuarant = async () => {
        const response = await fetch("/data/restaurantChains.json");
        const apidata = await response.json();
        setdata(apidata)
    }


    useEffect(() => {
        fetchrestuarant();
    })

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-bold'>
                    Top restaurant chains in Srinagar
                </div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center bg-[grey] rounded-full w-[30px] h-[30px] mx-2'>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center bg-[grey] rounded-full w-[30px] h-[30px] mx-2'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex  gap-7 overflow-hidden'>
                {
                    data.map((d, i) => {
                        return (

                            <Card {...d} key={i} />

                        )


                    })
                }
            </div>
        </div>
    )
}
