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

  const saveData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    obj = [...obj, Object.fromEntries(formData)];
    console.log(obj[0]);
    if (
      savedJobData.length > 0 &&
      savedJobData[savedJobData.length - 1] &&
      savedJobData[savedJobData.length - 1][0] &&
      savedJobData[savedJobData.length - 1][0].ID !== undefined
    ) {
      obj[0]["ID"] = savedJobData[savedJobData.length - 1][0].ID + 1;
    } else {
      obj[0]["ID"] = 0;
    }
    setDefaultValues({
      companyName: "",
      companyPosition: "",
      startDate: new Date(),
      endDate: new Date(),
    });
    return obj;
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
          setSavedJobData([...savedJobData, saveData(event)]);
        }}
      />

      {/* add flex to cards */}
      {savedJobData.length > 0
        ? savedJobData.map((data, index) => (
            <Card
              key={index}
              title={data[0].companyName}
              dataField1={data[0].startDate}
              dataField2={data[0].endDate}
              updateValues={updateValues}
              onClickDelete={() => {
                const updatedJobData = savedJobData.filter(
                  (job) => job[0].ID !== data[0].ID
                );
                setSavedJobData(updatedJobData);
              }}
              onClickEdit={() => {
                setDefaultValues(data[0]);
                // setDefaultValues(savedJobData.find(x => x.ID ===id))
              }}
            />
          ))
        : ""}
    </>
  );
};

export default App;
