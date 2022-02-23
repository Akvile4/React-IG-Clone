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
        <input onChange={(e) => setUsername(e.target.value)}/>
        <input onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit"> Login </button>
        </form>
    )
}

export default Login;