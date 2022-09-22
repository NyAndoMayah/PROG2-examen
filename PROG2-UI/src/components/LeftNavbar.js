import React from "react";
import { Link } from "react-router-dom";

function LeftNavbar() {
    return (
        <div className="col-2 h-100" >
            <nav className="navbar bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/groups">Groups</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/types">Types</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default LeftNavbar;