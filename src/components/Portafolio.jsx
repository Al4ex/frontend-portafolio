import React, { useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const Portafolio = () => {
  const [mode, setMode] = useState(true);
  console.log("es");
  useEffect(() => {
    

  }, [])
  
  return (
    <div className={`body${mode ? " dark" : ""}`}>
      <Toaster 
        toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: mode ? '#333' : '#fff',
      color: mode ? '#fff' : '#000',
    },

    // Default options for specific types

  }} />
      <Header mode={mode} setMode={setMode} />
      <Main mode={mode} />

      {/* <footer className="footer"></footer> */}
    </div>
  );
}

export default Portafolio