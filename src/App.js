import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './components/Firebase/firebase.js';
import { useStateValue } from './components/Util/StateProvider';
import Payment from './components/Payment/Payment.js'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Order/Orders';

const promise = loadStripe("pk_test_51HtQxjLQ1A20Nf2bK1cdST9ZLpjGPpLdVG5sM1D8T1BE68dab4wel4jNZzEfFc9SydBIQiRqjaB6IFdNFtS9xR3D00VLr5asBj");
 
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //this will only run once, when this app component loads

    auth.onAuthStateChanged(authUser => {
      console.log("User is: ", authUser);

      if (authUser) {
        //this means the user was logged in or has just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser     //if the user was logged in, in refresh the user will still be logged in
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null        //after logging out, after refresh the user will be null
        })
      }
    })
  }, []) 

  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path='/checkout'>
            <NavBar />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <NavBar/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>

          <Route path="/orders">
            <Orders/>
          </Route>

          <Route path='/'>
            <NavBar />
            <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;