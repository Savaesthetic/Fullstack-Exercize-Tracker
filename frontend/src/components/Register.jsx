const Register = () => {
    const registerUser = (e) => {
        e.preventDefault();

        // TODO make call to backend which makes call to mongodb atlas to register "add" a user
    }

    return (
    <div>
        <form onSubmit={registerUser}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username"/>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" />
            <input type="submit" value="Register" />
        </form>
    </div>
  )
}

export default Register