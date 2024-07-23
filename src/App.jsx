import React from 'react';
import Home from './Home/Home';
import Course from './components/Course';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
