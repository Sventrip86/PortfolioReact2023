import React from "react";
import "./Header.css";
import Nav from "../../components/nav/mobiledrawer";



function Header() {
    return (
        <div className="header ">
            <h1 className="title-header">Fabs portfolio.</h1>
            <Nav/>
        </div>
    );
}

export default Header;