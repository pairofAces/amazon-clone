// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>

          <Route path="/login">
            <Login/>
            {/* <h1>Login Page</h1> */}
          </Route>

          <Route path='/checkout'>
            <NavBar />
            <Checkout />
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