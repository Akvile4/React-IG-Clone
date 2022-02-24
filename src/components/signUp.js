import "../styles/signUp.scss";
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
        <div className="signUpBox">
            <div>
                <h2>Sign up here!</h2>
            </div>
            <div>
                <input className="signUpBar" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            </div>
            <div>
                <input className="signUpBar" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            </div>
            <div>
                <input className="signUpBar" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <div>
                <button className="signUpButton" type="submit"> <strong>Sign Up</strong></button>
            </div>
        </div>
        </form>
    )
}

export default SignUp;