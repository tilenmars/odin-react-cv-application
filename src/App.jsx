import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import NewJob from './components/NewJob'
import Card from './components/Card'
import Jobs from './components/Jobs'

const App = () => {
  let obj = [];
  const [savedRegisterData, setSavedRegisterData] = useState([]);
  const [savedJobData, setSavedJobData] = useState([]);

  const saveData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    obj = [...obj, Object.fromEntries(formData)];
    if (savedJobData.length > 0 && savedJobData[savedJobData.length - 1] && savedJobData[savedJobData.length - 1][0] && savedJobData[savedJobData.length - 1][0].ID !== undefined) {
      obj[0]["ID"] = savedJobData[savedJobData.length - 1][0].ID + 1;
    } else {
      obj[0]["ID"] = 0;
    }
    
    return obj;
  }

  return (
    <>
      {savedRegisterData.length < 1 ? (
        <Register 
          onSubmit={(event) => {
            setSavedRegisterData(saveData(event));
          }} 
        />
      ) : (
        <Card 
          title={`${savedRegisterData[0].name} ${savedRegisterData[0].surname}`} 
          text="" 
          dataField1={savedRegisterData[0].phone} 
          dataField2={savedRegisterData[0].email} 
          type={savedRegisterData[0].type}
        />
      )}
      
      <br />

      <NewJob 
        onSubmit={(event) => {
          setSavedJobData([...savedJobData, saveData(event)]);
        }}
      />

      {savedJobData.length > 0 ? (
        savedJobData.map((data, index) => (
          <Card 
            key={index} 
            title={data[0].companyName} 
            dataField1={data[0].startDate} 
            dataField2={data[0].endDate} 
            onClick={() => {
              const updatedJobData = savedJobData.filter(job => job[0].ID !== data[0].ID);
              setSavedJobData(updatedJobData);
            }}
          />
        ))
      ) : (
        console.log("No jobs added")
      )}
    </>
  );
}

export default App;
