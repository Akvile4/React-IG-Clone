import "../styles/login.scss";
import { useState } from 'react';
import { LoginRequest }  from '../utils';

const Login = ({userStateChange}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e) => {
        // prevent from rerendering
      e.preventDefault();
    //   stateChange("useris");
      userStateChange(LoginRequest( username, password));
    }

    return (
        <form onSubmit={submitHandler}>
        <div className="loginBox">
            <h2>Please Login</h2>
            <div>
                <input className="loginBar" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            </div>
            <div>
                <input className="loginBar" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <div>
                <button className="loginButton" type="submit"> <strong>Login</strong> </button>
            </div>
        </div>
        </form>
    )
}

export default Login;