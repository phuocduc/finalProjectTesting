import React from 'react';
import './App.css';
import home from './views/home'
import {Switch, Route} from 'react-router-dom'
import contact from './views/contact';
import destination from './views/destination';
import login from './views/login';
import Register from './views/register';


function App() {
  return (
    <Switch>
     <Route path="/" exact component={home}/>
     <Route path="/contact" component={contact}/>
     <Route path="/destinations" component={destination}/>
     <Route path="/login" component={login}/>
     <Route path="/register" component={Register}/>
 </Switch>
  );
}

export default App;
