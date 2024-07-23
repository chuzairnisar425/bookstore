import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';
import list from '../../public/list.json'

const Courses = () => {
    return (
        <>
<Navbar/>
<div className='min-h-screen my-10 max-w-screen-2xl container mx-auto md:px-20 px-4'>
  <div className='mt-28 items-center justify-center text-center '>
    <h1 className='text-2xl font-semibold md:text--4xl  '>We're delighted to have you <span className='text-blue-500'> here! :)</span> </h1>
    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium architecto, optio doloremque assumenda ex repudiandae consequatur possimus! Hic totam minima dolorem voluptates delectus corporis odio placeat tempora culpa eos.</p>
    <button className='bg-blue-500 text-white px-4  py-2 rounded-md hover:bg-blue-700 duration-300 mt-5'> Back</button>
  </div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
  {
   list.map ((item)=>(
    <Cards key={item.id} item={item}/>
   ))
  }
</div>
</div>

       <Footer/> 
        </>
    );
}

export default Courses;
