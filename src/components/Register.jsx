const savedData = new Array;
const saveData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const obj = Object.fromEntries(formData);
    savedData.push(obj);
    console.log(savedData);
}


function Register(){
return(
<form onSubmit={saveData}>
    <label htmlFor="name">Name: </label>
    <input type="text" name="name" id="name" />
    <br />
    <label htmlFor="surname">Surname: </label>
    <input type="text" name="surname" id="surname" />
    <br />
    <label htmlFor="email">Email: </label>
    <input type="email" name="email" id="email" />
    <br />
    <label htmlFor="phone">Phone number: </label>
    <input type="tel" name="phone" id="phone" />
    <input type="submit" value="submit" />
</form>)


}

export default Register