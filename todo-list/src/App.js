import React from 'react';
import logo from './logo.svg';
import './App.css';
import People from './default.js';
import { BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Tasks</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user3">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
/*
function People(name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld,films) {
  return(
  this.name = name;
  this.height = height;
  this.mass = mass;
  this.hair_color = hair_color;
  this.skin_color = skin_color;
  this.eye_color = eye_color;
  this.birth_year = birth_year;
  this.gender = gender;
  this.homeworld = homeworld;
  this.films = films;
  );
}
*/


export default App;
