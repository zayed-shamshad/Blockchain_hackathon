import React, {useState} from 'react';
import './Login.css';
import gift from './gift.svg'

const Login = ({setMenu, main}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const Enter = (e) => {
        e.preventDefault();
        if(userName === "user" && password === "password"){
            setMenu(main);
        }
    };

    const currentView = () => {
          return (
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
  