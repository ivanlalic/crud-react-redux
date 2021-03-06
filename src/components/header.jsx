import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar dark bg-primary justify-content-between">
            <div className="cotainer">
                <h1>
                    <Link to={'/'} className="text-light">
                        CRUD - React, REDUX, REST API & Axios
                    </Link>
                </h1>
            </div>
            <Link to={"/products/new"}
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Add product &#43;</Link>         
        </nav>
     );
}
 
export default Header;