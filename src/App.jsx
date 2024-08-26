import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import NewJob from './components/NewJob'
import Card from './components/Card'



const App = () => {
  let obj = [];
  const [savedRegisterData, setSavedRegisterData] = useState([]);
  const [savedJobData, setSavedJobData] = useState([]);
  const saveData = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      obj = [Object.fromEntries(formData)];
      return obj;
  }
return(
  <>
  {savedRegisterData.length < 1 ? 
    <Register onSubmit={function(event){
      setSavedRegisterData(saveData(event));}}/> : <Card title={savedRegisterData[0].name + " " + savedRegisterData[0].surname} text="blabla" startDate="danes" endDate="jutri" type="krneki"/>
  }
    <br/>
    {console.log(savedRegisterData)}
    <NewJob onSubmit={function(event){
    setSavedJobData(saveData(event));
  }}/>
  </>
)
}
export default App
