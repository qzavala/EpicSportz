import React, { useState } from "react"

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h1>Register Now!!</h1>
            <form>
                <label type="text">First Name:</label>
                <input type="text" placeholder="Tim" />
                <label type="text">Last Name:</label>
                <input type="text" placeholder="Tatman" />
                <label type="email">Email:</label>
                <input type="email" placeholder="pokemon@example.com" />
                <label type="password">Password:</label>
                <input type="password" placeholder="password" />



            </form>
        </div>

    )
}
export default SignUp