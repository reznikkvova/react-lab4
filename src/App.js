
import './App.css';
import {Link} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import Main from "./components/Main";
import News from "./components/News";
import Login from "./components/Login";
import Profile from "./components/Profile";
import {useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(null);
    const checkLoggedIn = () => {
        setLoggedIn(localStorage.getItem('loggedIn'));
    }
  return (
    <div className="App">
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to='/'>Головна</Link>
          </li>
          <li className="navbar-item">
            <Link to='/news'>Новини</Link>
          </li>
          <li className="navbar-item">
            <Link to='/login'>Авторизація</Link>
          </li>
          <li className="navbar-item">
            <Link to='/profile'>Профіль</Link>
          </li>
        </ul>
      </div>
      <div className="main">
        
          <Switch>
            <Route exact path="/"  component={Main} />
            <Route path="/news" component={News} />
              <Route path="/login">
                  {loggedIn === 'true' ? <Profile/> : <Login checkLoggedIn={checkLoggedIn}/>}
              </Route>
              <Route path="/profile">
                  {loggedIn === 'true' ? <Profile/> : <Redirect to='/login'/> }
              </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
