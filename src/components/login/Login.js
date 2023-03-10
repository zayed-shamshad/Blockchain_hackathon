import React, {useState} from 'react';
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth"
import './Login.css';
import gift from './gift.svg'

const Login = ({setMenu, main}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick =(e)=>{
      e.preventDefault();
      signInWithPopup(auth, provider).then((data)=>{
          console.log('Logged in as: ' + data.user.displayName);
          console.log(data);
          setMenu(main.Dashboard);
      })
    }

    const Enter = (e) => {
        e.preventDefault();
        if(userName === "user" && password === "password"){
            setMenu(main.Main);
        }
    };
    const currentView = () => {
          return (
            <div>
              <form>
                <h2>Institute Reward System</h2>
                <fieldset>
                  <legend>Log In</legend>
                  <ul>
                    <li>
                      <label for="username">Username:</label>
                      <input type="text" required onChange={(e) => setUserName(e.target.value)}/>
                    </li>
                    <li>
                      <label for="password">Password:</label>
                      <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>
                    </li>
                  </ul>
                </fieldset>
                <button onClick={(e) => Enter(e)}>Login</button>
                <button onClick={handleClick}>Signin with Google</button>
              </form>
            </div>
          )
    };

  
      return (
        <section id="entry-page">
          {currentView()}
          <div className="right">
              <h2>A gift for your Efforts</h2>
              <center><div align="right">
              <img src={gift} /> 
              </div>
              </center>
          </div>
        </section>
      )
};

export default Login;
  