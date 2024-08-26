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
      obj = [...obj, Object.fromEntries(formData)];
      return obj;
  }
return(
  <>
  {savedRegisterData.length < 1 ? 
    <Register onSubmit={function(event){
      setSavedRegisterData(saveData(event));}}/> : <Card title={savedRegisterData[0].name + " " + savedRegisterData[0].surname} text="" dataField1={savedRegisterData[0].phone} dataField2={savedRegisterData[0].email} type={savedRegisterData[0].type}/>
  }
    <br/>
    <NewJob onSubmit={function(event){
    setSavedJobData([...savedJobData, saveData(event)]);
  }
}

/>
{console.log(savedJobData)}
{savedJobData.length > 0 ? <Card title={savedJobData[0][0].companyName} dataField1={savedJobData[0][0].startDate} dataField2={savedJobData[0][0].endDate}/> : ""}
  </>
)
}
export default App
