import { useState } from 'react';
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// import { Routes, Route, Router } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#05162e';
      showAlert(" Dark mode has been enabled.", "success");
      // document.title = "TextUtils-Dark mode";

      // setInterval(() => {
      //   document.title ="TextUtils is Amazing!";
      // },2000);
      

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled.", "success");
      // document.title = "TextUtils-Light mode";
    }
  }


  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-5 py-3">

        <Routes>
          <Route path="/" element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />
          } />
          <Route path="/about" element={<About mode={mode} />} />   
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </>
  );


}

export default App;
