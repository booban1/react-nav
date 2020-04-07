import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/Toolbar';
import SideDrawer from "./components/SideDrawer.js"
import Backdrop from './components/Backdrop';

class App extends Component{

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler =  () => {
    this.setState((prevState) => { 
      return{
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    }
    );
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  }; 

  render(){

    let backdrop;

    if (this.state.sideDrawerOpen){
      
      backdrop = <Backdrop click={this.backdropClickHandler}/> 
    }

    return(
      <div style={{height: '100%'}}>
        <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: "68px"}}>
        <p>I will place more objects here soon</p></main>
      </div>
    );
  }
}

export default App;
