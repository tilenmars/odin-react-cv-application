const Register = props => {
return(
    <form onSubmit={props.onSubmit}>
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
    <input type="text" defaultValue="register" name="type" id="phone"/>
    <input type="submit" value="submit" />
</form>)


}

export default Register