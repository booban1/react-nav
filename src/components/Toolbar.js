import React from 'react';
import "./toolbar.css";
import DrawerButton from './DrawerButton';

const ToolBar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toobar-toggle-button">
                <DrawerButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><a href="/">LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Market</a></li>
                    <li><a href="/">Users</a></li>
 
                </ul>
            </div>
        </nav>
    </header>
);

export default ToolBar;