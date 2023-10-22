import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Nav from "./components/nav/mobiledrawer";
import Intro from './components/intro/intro';
import Works from './components/works/Works';
import Contact from './components/contact/contact';


function App() {
  return (
    <div className="App">
      <Header>
      
      </Header>
      <Nav/>
      <Intro/>
      <About/>  
      <Works/>
      <Contact/>
      
    </div>
  );
}

export default App;
