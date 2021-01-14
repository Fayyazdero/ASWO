import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/Header"
import {Navbar} from "./components/Navbar"
import {Card} from "./components/Card"
import './App.css';

function App() {
  const header = {
    name: 'Header',
    nav: 'nav'
  }
  

  return (
    <div className="App">
      <Header headerName={header} title={true ? "small " :"tssssss"} name="chckingg"/>
      <Navbar/>
      <Card/>
    </div>
  );
}

export default App;
