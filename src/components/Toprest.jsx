import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card'

export default function Toprest() {

    const [data, setdata] = useState([]);
    const [ currentIndex,setcurrentIndex]= useState(0);
    const CardPreview= 4;


    const leftarrow=()=>{
        setcurrentIndex((previndex)=>{
            if (previndex > 0 ){
                return previndex -1
            } else{
                return data.length -CardPreview
            }
        })
    }
    const rightarrow=()=>{
        setcurrentIndex((previndex)=>{
            if (previndex < data.length -CardPreview){
                return previndex +1
            }
            else{
                return (0)
            }
        })
    }

    const fetchrestuarant = async () => {
        const response = await fetch("/data/restaurantChains.json");
        const apidata = await response.json();
        setdata(apidata)
    }


    useEffect(() => {
        fetchrestuarant();
    })

    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-bold '>
                    Top restaurant chains in Srinagar
                </div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center bg-[grey] rounded-full w-[30px] h-[30px] mx-2'>
                        <FaArrowLeft onClick={leftarrow}  />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center bg-[grey] rounded-full w-[30px] h-[30px] mx-2'>
                        <FaArrowRight onClick={rightarrow} />
                    </div>
                </div>
            </div>
            <div className='flex  gap-7 overflow-hidden'>
                {
                    data.slice(currentIndex, currentIndex+ CardPreview).map((d, i) => {
                        return (


                            <Card width= "w-full md:w-[273px] h-[350px]" {...d} key={i} />

                        )


                    })
                }
            </div>
            <hr className='my-5 border-[1px]'></hr>
        </div>
    )
}
