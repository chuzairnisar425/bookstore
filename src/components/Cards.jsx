import React from 'react';

const Cards = ({item}) => {
  return (
    <>
    <div className='my-9 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl cursor-pointer hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border
">
  <figure>
    <img
      src={item.image} 
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-info">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="rounded-md border-[2px]  hover:bg-blue-500 hover:text-white px-3 py-2 duration-200">${item.price}</div>
      <div className="rounded-md border-[2px] hover:bg-blue-500 hover:text-white px-3 py-2 duration-200 ">But Now</div>
    </div>
  </div>
</div>
    </div>
      
    </>
  );
}

export default Cards;
