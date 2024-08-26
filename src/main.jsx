import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Register from './components/Register.jsx'
import './index.css'
import NewJob from './components/NewJob.jsx'
import React, {useState} from 'react'

const savedData = new Array;
const saveData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const obj = Object.fromEntries(formData);
    savedData.push(obj);
    console.log(savedData);
    return savedData;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
