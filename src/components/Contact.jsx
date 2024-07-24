import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from './Navbar';
import banner from '/Banner.png'
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
    <div>
        <Navbar/>

    </div>
    <div className='flex min-h-screen items-center justify-center flex-wrap sm:mt-5 dark:bg-slate-900 dark:text-white' >
      <div>
        <img src={banner} alt="contact image" />
      </div>
        <div className="w-2/5">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              
              <h3 className="font-bold text-3xl">Contact Us</h3>

              {/* Name */}
              <div className='mt-4 space-y-2'>
              <span className='font-semibold'>Name</span>
              <br />
                <input
                  type="text"
                  placeholder='Enter your name'
                  className='w-96 px-3 border rounded-md outline-none py-1'
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
              <span className='font-semibold'>Email</span>
              <br />
                <input
                  type="email"
                  placeholder='Email Address'
                  className='w-96 px-3 border rounded-md outline-none py-1'
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
              <span className='font-semibold'>Message</span>
              <br />
              <textarea name="message" id="message" className='w-96 px-3 rounded-md border-[1px]   py-4'  placeholder='Message' 
              {...register("message", { required: true })}></textarea>
               <br />
                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Buttons */}
              <div className='flex  mt-4'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 duration-300'
                >
                  Submit
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Contact;
