const savedData = new Array();
const saveData = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const obj = Object.fromEntries(formData);
  savedData.push(obj);
  console.log(savedData);
};

// if prop defaultValues is undefined -> create
// otherwise --> update

// also clear form after submit
const NewJob = (props) => {
  const companyName = props.companyName;
  console.table(companyName);
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="jobOrEducation">Entering a job or education? </label>
      <select name="jobOrEducation" id="jobOrEducation">
        Education or job?
        <option value="Job">Job</option>
        <option value="Education">Education</option>
      </select>
      <br />
      <label htmlFor="companyName">Company name: </label>
      <input
        value={props.companyName}
        onChange={(e) => props.updateValues({ companyName: e.target.value })}
        type="text"
        name="companyName"
        id="companyName"
      />
      <br />
      <label htmlFor="companyPosition">Position: </label>
      <input
        value={props.companyPosition}
        onChange={(e) =>
          props.updateValues({ companyPosition: e.target.value })
        }
        // value={({companyName}) ?  {companyName} : ""}
        // onChange={(e) => ({'companyName': e.target.value})}
        type="text"
        name="companyPosition"
        id="companyPosition"
      />
      <br />
      <label htmlFor="startDate">Start date: </label>
      <input
        value={props.startDate}
        onChange={(e) => props.updateValues({ startDate: e.target.value })}
        type="date"
        name="startDate"
        id="startDate"
      />
      <br />
      <label htmlFor="endDate">End date: </label>
      <input
        value={props.endDate}
        onChange={(e) => props.updateValues({ endDate: e.target.value })}
        type="date"
        name="endDate"
        id="endDate"
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default NewJob;
