import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import "./App.css";
import { PostCard } from "./components/PostCard";


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Switch>
          <Route path="/fayaz" component={PostCard} />
          <Route path="/individual-developer" component={Card} />
          <Route path="/shop" component={Card} />
        </Switch>
       {/* here is footer */}
    </div>
  );
}

export default App;
