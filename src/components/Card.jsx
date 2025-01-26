import React from 'react'

export default function Card(props) {
  return (
    <div className='w-[273px]  shrink-0 grow '>
      <div className='h-[182] rounded-[15px ] overflow-hidden  relative'>
        <img  className='object-cover w-full h-full' src={props.image} alt="" />
        <div className='image-overplay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-black'>
       {props.offer}
        </div>
      </div>
      <div className='mt-3 text-xl text-black '>
{props.title}
      </div>
    </div>
  )
}
