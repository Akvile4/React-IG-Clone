import { useState } from 'react';
import { fetchRequest } from '../utils';

const SignUp = ({userStateChange}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e) => {
        // prevent from rerendering
      e.preventDefault();
    //   stateChange("useris");
      userStateChange(fetchRequest( username, email, password));
    }

    return (
        <form onSubmit={submitHandler}>
        <input onChange={(e) => setUsername(e.target.value)}/>
        <input onChange={(e) => setEmail(e.target.value)}/>
        <input onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit"> Sign Up </button>
        </form>
    )
}

export default SignUp;