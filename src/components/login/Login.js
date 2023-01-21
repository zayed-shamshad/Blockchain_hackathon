import React, {useState} from 'react';
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth"
import './Login.css';
import gift from './gift.svg'

const Login = ({setMenu, main}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick =()=>{
      signInWithPopup(auth, provider).then((data)=>{
          console.log("Google Login Success");
          console.log(data);
      })
    }

    const Enter = (e) => {
        e.preventDefault();
        if(userName === "user" && password === "password"){
            setMenu(main);
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
              </form>
              <button onClick={handleClick}>
              Signin with Google
              </button>
            </div>
          )
    };

  
      return (
        <section id="entry-page">
          {currentView()}
          <div className="right">
              <img src={gift} />
          </div>
        </section>
      )
};

export default Login;
  