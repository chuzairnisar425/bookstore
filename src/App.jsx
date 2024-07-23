import React from 'react';
import Home from './home/Home';
import Course from './components/Course';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
<div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
   

</div>
  );
}

export default App;
