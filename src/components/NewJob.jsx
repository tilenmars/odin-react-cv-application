const savedData = new Array;
const saveData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const obj = Object.fromEntries(formData);
    savedData.push(obj);
    console.log(savedData);
}

const NewJob = props =>{
    return(
    <form onSubmit={props.onSubmit}>
        <label htmlFor="jobOrEducation">Entering a job or education? </label>
        <select name="jobOrEducation" id="jobOrEducation">Education or job?
            <option value="Job">Job</option>
            <option value="Education">Education</option>
        </select><br/>
        <label htmlFor="companyName">Company name: </label>
        <input type="text" name="companyName" id="companyName" />
        <br />
        <label htmlFor="companyPosition">Position: </label>
        <input type="text" name="companyPosition" id="companyPosition" />
        <br />
        <label htmlFor="startDate">Start date: </label>
        <input type="date" name="startDate" id="startDate" />
        <br />
        <label htmlFor="endDate">End date: </label>
        <input type="date" name="endDate" id="endDate" />
        <input type="submit" value="submit" />
    </form>)
    
    
    }
    
    export default NewJob