import { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import NewJob from "./components/NewJob";
import Card from "./components/Card";
import Jobs from "./components/Jobs";

const App = () => {
  let obj = []; //wtf
  const [savedRegisterData, setSavedRegisterData] = useState([]); // userData or registerData
  const [savedJobData, setSavedJobData] = useState([]); //jobData or userJobData
  const [defaultValues, setDefaultValues] = useState({
    companyName: "",
    companyPosition: "",
  });

  const updateValues = (newValues) => {
    setDefaultValues((prevValues) => ({ ...prevValues, ...newValues }));
  };
  console.log(savedJobData);
  const saveData = (event) => {
    event.preventDefault();
    let tempObject = [];
    const formData = new FormData(event.target);
    let formDataObject = Object.fromEntries(formData);
    obj = [...obj, formDataObject];
    formDataObject.ID = parseInt(formDataObject.ID);
    if (obj[0].ID || obj[0].ID === 0) {
      let index = savedJobData.findIndex((x) => x.ID === event.ID);
      tempObject = savedJobData;
      tempObject[formDataObject.ID] = formDataObject;
      console.log(savedJobData);
      console.log(tempObject);
      obj[0] = tempObject;
    } else if (
      savedJobData.length > 0 &&
      savedJobData[savedJobData.length - 1] &&
      savedJobData[savedJobData.length - 1] &&
      savedJobData[savedJobData.length - 1].ID !== undefined
    ) {
      obj[0]["ID"] = savedJobData[savedJobData.length - 1].ID + 1;
    } else {
      obj[0]["ID"] = 0;
    }
    setDefaultValues({
      ID: undefined,
      companyName: "",
      companyPosition: "",
      startDate: new Date(),
      endDate: new Date(),
    });
    if (obj) {
      return obj[0];
    } else return obj;
  };

  return (
    <>
      {/* make this 1 component */}
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

      {/* rename to add job form */}
      {/* pass default values to job - it can be undefined or object */}
      <NewJob
        ID={defaultValues.ID}
        jobOrEducation={defaultValues.jobOrEducation}
        companyName={defaultValues.companyName}
        companyPosition={defaultValues.companyPosition}
        startDate={defaultValues.startDate}
        endDate={defaultValues.endDate}
        updateValues={updateValues}
        onSubmit={(event) => {
          let formData = new FormData(event.target);
          formData = Object.fromEntries(formData);
          formData.ID = parseInt(formData.ID);
          if (formData.ID || formData.ID === 0) {
            // let tempObject = savedJobData;
            // // tempObject = Object.assign(tempObject[formData.ID], formData);
            // tempObject[formData.ID] = formData;
            setSavedJobData(saveData(event));
          } else {
            setSavedJobData([...savedJobData, saveData(event)]);
          }
        }}
      />

      {/* add flex to cards */}
      {savedJobData.length > 0
        ? savedJobData.map((data, index) => (
            <Card
              key={index}
              title={data.companyName}
              dataField1={data.startDate}
              dataField2={data.endDate}
              updateValues={updateValues}
              onClickDelete={() => {
                const updatedJobData = savedJobData.filter(
                  (job) => job.ID !== data.ID
                );
                setSavedJobData(updatedJobData);
              }}
              onClickEdit={() => {
                setDefaultValues(data);
                // setDefaultValues(savedJobData.find(x => x.ID ===id))
              }}
            />
          ))
        : ""}
    </>
  );
};

export default App;
