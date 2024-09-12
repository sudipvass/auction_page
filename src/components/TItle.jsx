import React from 'react';

const Title = () => {
  return (
    <>
      <div className='pt-20  text-center group'>
        <h1 className='font-bold text-3xl relative'>
          Latest Auction
        </h1>
        <p className='w-8 sm:w-12 h-[2px] sm:h-[5px] bg-gray-70'></p>
        <p>
          Unlock elite experiences with Siddharth Bank's exclusive auction.
        </p>
        <span className="block h-1 w-20 bg-red-500 mx-auto mt-2 transition-all duration-300 ease-in-out transform group-hover:w-32 group-hover:bg-red-700"></span>
      </div>
    </>
  );
}

export default Title;
