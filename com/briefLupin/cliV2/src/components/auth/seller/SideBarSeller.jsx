import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {logout} from '../../../actions';
import '../../style.css'

class SideBarSeller1 extends Component {

    componentDidUpdate(){
        const { isAuth, auth } = this.props;
        if (!isAuth) {
            this.props.history.push('/')
        }
        
    }
    render(){
        return (
            <div className="sidebar mt-4">
                <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
                <Link href="#clients"><i className="fa fa-fw fa-user"></i> Clients</Link>
                <Link href="#clients"><i className="fa fa-fw fa-user"></i> Orders</Link>
                <Link href="#Profil"><i className="fa fa-fw fa-wrench"></i> Services</Link>
                
                <Link className="mt-4" type="button" onClick={()=> logout()}> <i className="fas fa-sign-out-alt"></i> Logout</Link>
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
const SideBarSeller = connect(mapStateToProps, {logout})(SideBarSeller1)
  
export {SideBarSeller};