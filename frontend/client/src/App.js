import {Router} from '@reach/router';
import './App.css';
import React from 'react';
import LandingPage from './Components/Land/landing';
import LoginPage from './Components/Logsss/logs';
import MainPage from './Components/Mains/fp';
function App() {
  return (
    <div>
      <Router>
        <Lands path='/'></Lands>
        <Logins path='/log'></Logins>
        <Maines path='/main'></Maines>
      </Router>
    </div>
  );
}
function Lands(){
  return <LandingPage></LandingPage>
}
function Maines(){
  return <MainPage></MainPage>
}
function Logins(){
  return <LoginPage></LoginPage>
}
export default App;
