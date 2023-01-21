import React, {useState} from 'react';
import './Login.css';

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
              <h2>Subsidy Distribution Portal</h2>
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
        </section>
      )
};

export default Login;
  