import React from 'react';
import './App.css';
import Axiostest from './Axiostest.js';
import { BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';
import moment from 'moment';
import StickyHeadTable from './paginado2';


function App() {
  return (
    <div className="Blog">
         <Header/>
         <NavigationBar/>
        <StickyHeadTable/>
  </div>
    );
}

function Header (){
  return (
    <div  classname = "App-header">
    <header>
      <center>
      <h1> Todo-List</h1>
      </center>
    </header>
    </div>
  );
}


function NavigationBar() {
  return (
    <Router>
      <div className="NavigationBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tasks">
            <Axiostest/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
  }

function Home() {
  return(
  <div className = "Home">
  <h1>Welcome ! </h1>
  <img src = ""></img>
  </div>
  );
}

function About() {
  return (
    <div className = "About">
      <a>About</a>
    </div>
      );
}

function Tasks() {
  return (
    <div className = "Tasks">
    <a>Tasks</a>
    <Tasks/>
    </div>
  );
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
}*/
export default App;
