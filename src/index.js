import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import App from './App';
import Users from './components/Users'
import Profile from './components/Profile'
const Root = () => {

  const handleClick = () => {
    console.log('Thanks for clicking bitch!')
  };
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/' exact={true} activeStyle={{fontWeight: "bold"}}>App</NavLink>
        <br></br>
        <NavLink activeClassName='red' to="/users">Users</NavLink>
        <br></br>
        <NavLink activeClassName='blue' to="/hello">Hello</NavLink>
        <br></br>
        <NavLink exact={true} activeClassName='green' to="/users/1">Andrew's Profile</NavLink>
        <br></br>
        <NavLink to="/"exact onClick={handleClick}>App with click handler</NavLink>

      <Switch> 
        <Route exact path="/">
          <App />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/users/:userId">
          <Profile />
        </Route>
        <Route>
          <h1>404: Page you are looking for does not exist</h1>
        </Route>
      </Switch>

      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

