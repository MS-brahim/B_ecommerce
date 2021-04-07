import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import {logout} from '../actions';

class NavbarComponent extends Component {

    _renderLogout() {
        const { isAuth, logout, auth } = this.props;
        if (isAuth) {
            return (
                <Link className="text-white" type="button" onClick={()=> logout()}> {auth.full_name} : Logout <i className="fas fa-sign-out-alt"></i></Link>
            );
        }
        return (
            <span>
                <Link type="button" className="text-white" to="/sign-in">Login <i className="fas fa-sign-in-alt"></i></Link> 
                &nbsp; | <Link type="button" className="text-white">Create new account <i className="fas fa-user-plus"></i></Link> 
            </span>
        )
    }

    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop:'35px'}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Logo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/catalog">Catalog</Link>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                {this._renderLogout()}
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
  
const mapStateToProps = ({auth}) => {
    return {
      isAuth: auth.isAuth,
      auth: auth.auth
    };
};
const NavBar = connect(mapStateToProps, {logout})(NavbarComponent)
export {NavBar};