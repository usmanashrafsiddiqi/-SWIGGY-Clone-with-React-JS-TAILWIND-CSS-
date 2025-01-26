import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



export default function Category() {
const [slide,setslide]=useState(0);
  const [categories, setCategories] = useState([]);

  const fetchcategory = async () => {
    const response = await fetch('/data/category.json');
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchcategory();
  }, []);

const nextslide= ()=>{
    console.log(categories.length);
    if(categories.length -8 == slide) return false;
    setslide(slide + 3 );

};
const prevslide=()=>{
    if(slide  == 0) return false;
    setslide(slide - 3 )
 
};

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>
          What's on your mind?
        </div>
        <div className='flex'>
          <div onClick={prevslide}  className='cursor-pointer flex justify-center items-center bg-[grey] rounded-full w-[30px] h-[30px] mx-2'>
            <FaArrowLeft />
          </div>
          <div onClick={nextslide} className='cursor-pointer flex justify-center items-center bg-[grey] rounded-full w-[30px] h-[30px] mx-2'>
            <FaArrowRight  />
          </div>
        </div>
      </div>

      <div className='flex overflow-hidden'>
        {categories.map((cat, index) => {
          return (
            <div key={index}  style={{
                transform:`translateX(-${slide * 100}%)`
            }}
            className='flex flex-col items-center mx-2  '>
              <div className='w-[135px] h-[135px]'>
                <img className='rounded-full w-full h-full object-cover' src={cat.image} alt={cat.path} />
              </div>
              <div className='mt-2 text-center'>{cat.path}</div>
            </div>
          );
        })}
      </div>
<hr className='my-5 border-[1px]'></hr>
    </div>
  );
}
