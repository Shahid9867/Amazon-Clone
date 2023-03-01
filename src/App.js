import './App.css';
import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
const [{}, dispatch] = useStateValue();

  useEffect(()=>{
//will only run once  when the app component loads

auth.onAuthStateChanged(authUser => {
  console.log("The user is => ", authUser);
  if(authUser){
    //the user just logged in / or te user was logged in
    dispatch({
      type: "SET_USER",
      user: authUser
    })
  }
  else{
    //user is logged out
    dispatch({
      type: "SET_USER",
      user: null
    })
  }
})
  }, [])
  return (
    <Router>
    <div className="app">
    
    <Routes>
    <Route path="/login" element={
      <Login />
      }>
      </Route>
    <Route path="/checkout" element={
      <>
      <Header />
      <Checkout />
      </>
      }>
      </Route>
    <Route path="/" element={
      <>
      <Header />
      <Home />
      </>
    }>
     
      </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
