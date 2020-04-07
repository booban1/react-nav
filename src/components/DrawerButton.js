import React from "react";
import "./DrawerButton.css";

const DrawerButton = props => (
 <button className="toggle-button" onClick={props.click}>
     <div className="toggle-button-line"/>
     <div className="toggle-button-line"/>
     <div className="toggle-button-line"/>
 </button>
);

export default DrawerButton;