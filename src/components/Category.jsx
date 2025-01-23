import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Category() {

  const [categories, setCategories] = useState([]);

  const fetchcategory = async () => {
    const response = await fetch('/data/category.json');
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchcategory();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>
          What's on your mind?
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

      <div className='flex'>
        {categories.map((cat, index) => {
          return (
            <div key={index} className='flex flex-col items-center mx-2'>
              <div className='w-[120px] h-[120px]'>
                <img className='rounded-full w-full h-full object-cover' src={cat.image} alt={cat.path} />
              </div>
              <div className='mt-2 text-center'>{cat.path}</div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
