import React from "react";
import "./SideDrawer.css"

const SideDrawer = props => {

    let drawerClasses = 'side-drawer';

    if (props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
    <nav className={drawerClasses}>
    <h2>Online Market</h2>
    <p>We got al your needs at hand</p>
        <ul>
            <li href="/">Products</li>
            <li href="/">Market</li>
            <li href="/">Users</li>
        </ul>
    </nav>
    );

};

export default SideDrawer;