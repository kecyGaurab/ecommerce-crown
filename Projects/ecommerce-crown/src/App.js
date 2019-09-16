import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route  } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component'
import SignInAndSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up-component'
import { auth } from './firebase/firebase.utils'
import { throwStatement } from '@babel/types';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
unsubscribefromAuth = null

  componentDidMount(){
  this.unsubscribefromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path='/' component ={Homepage} />
        <Route exact path='/shop' component ={ShopPage} />
        <Route exact path='/signin' component ={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    );
  }

}

export default App;
