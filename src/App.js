import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import Menue from './Components/Menue';
function App() {
  return (
   
  //   <React.StrictMode>
  //     <SignUpForm />
  //  </React.StrictMode>

   <Routes>
      <Route path='/' element={<SignUpForm/>}/>
      <Route path='/menue' element={<Menue/>}/>
   </Routes>
   
  );
}

export default App;