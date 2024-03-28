import React from "react" 

const Login = () => {
    return (
        <div>
            <h1>Login!!</h1>
            <form>
                <label type="email">Email:</label>
                <input type="email" placeholder="pokemon@example.com" />
                <label type="password">Password:</label>
                <input type="password" placeholder="password" />
            </form>
        </div>
    )
}

export default Login