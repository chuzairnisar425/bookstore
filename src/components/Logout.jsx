import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
const  handleLogout =()=>{
    try {
        setAuthUser({
            ...authUser,
            user:null

        })
        localStorage.removeItem('Users')
        toast.success("Logout Successfully")

        setTimeout(() => {

            window.location.reload();


        }, 2000);
    } catch (error) {
        toast.error("Error: "+error.message)
        setTimeout(() => {
            
        }, 2000);
    }
}
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 cursor-pointer rounded' onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
