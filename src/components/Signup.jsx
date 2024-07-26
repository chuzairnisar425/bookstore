import React from 'react';
import { json, Link, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast';

const Signup = () => {
  const location = useLocation();
  const from = location.state?.from?.pathhname || '/';
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {

      fullname: data.fullname,
      email: data.email,
      password: data.password,

    }
    await axios.post('http://localhost:4003/user/signup', userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {

          toast.success('Signup Successfully');
          navigate(from, { replace: true })
        }
        localStorage.setItem('Users', JSON.stringify(res.data.user))
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
          toast.error('Error: ' + err.response.data.message);

        }
      })
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder='Enter your name'
                  className='w-80 px-3 border rounded-md outline-none py-1'
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='w-80 px-3 border rounded-md outline-none py-1'
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder='Enter your password'
                  className='w-80 px-3 border rounded-md outline-none py-1'
                  {...register("password", { required: true })}
                />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Buttons */}
              <div className='flex justify-around mt-4'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 duration-300'
                >
                  Signup
                </button>
                <p className='text-xl'>
                  Have an Account?
                  <button
                    type="button"
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById('login-modal').showModal()}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <dialog id="login-modal">
        <Login />
      </dialog>
    </>
  );
};

export default Signup;
