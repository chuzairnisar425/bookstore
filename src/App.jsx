import React from 'react';
import Home from './home/Home';
import Course from './components/Course';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
<div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
<Toaster />
</div>
  );
}

export default App;
