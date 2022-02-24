import '../styles/App.scss';
import logo from "../images/igLogo.png"
import Cards from './Cards';
import Navbar from "./Navbar";
import { useState } from 'react';
import { fetchRequest } from '../utils';
import SignUp from "./signUp";
import Login from "./login";

const App = () => {
  const [user, setUser] = useState("");
  


  return (
    <div className="App">
      {user ? 
            
      <main>
        <Navbar/> 
        <div className="container">
          <Cards/>
        </div>
      </main> :
      <main>
        {/* <form onSubmit={submitHandlerLogin}>
        <input onChange={(e) => setUsername(e.target.value)}/>
        <input onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit"> Login </button>
        </form>
        <button onClick={}>Sign Up</button> */}
        {/* <SignUp userStateChange={setUser}/> */}
        <div className="box">
          <img className="logo" src={logo} alt="instagram logo" />
          <Login userStateChange={setUser} />
          <SignUp userStateChange={setUser}/>
        </div>
        {/* <Login userStateChange={setUser} />
        <SignUp userStateChange={setUser}/> */}
      </main>
      }
      

    </div>
  );
}

export default App;
