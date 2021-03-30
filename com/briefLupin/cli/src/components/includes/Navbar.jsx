import React from 'react';
import { Login } from '../Login';
import { Register } from '../Register';
import { FixedNavTop } from './NavFixed';

const NavBar = (props) => {

    return (
        <div>
            <FixedNavTop/>
            <Login/>
            <Register/>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop:'35px'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/catalog">Catalog</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <span type="button" className="text-white" data-bs-toggle="modal" data-bs-target="#loginModel">Login <i className="fas fa-sign-in-alt"></i></span> 
                            &nbsp; | <span type="button" className="text-white" data-bs-toggle="modal" data-bs-target="#registerModel">Create new account <i className="fas fa-sign-in-alt"></i></span> 
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}
  
export  {NavBar};