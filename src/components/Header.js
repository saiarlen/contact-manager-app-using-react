import React from "react";

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
            <div className="container-fluid justify-content-center">
                <span className="navbar-brand mb-0 h1 text-uppercase">{props.title}</span>
            </div>
        </nav>
    );
};


export default Header;

