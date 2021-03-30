import React from 'react';
import PropTypes from 'prop-types';
 
const FixedNavTop = () => {
    return (
        <nav className="navbar fixed-top navbar-light bg-warning px-5">
            <div className="float-right"><i className="fab fa-whatsapp"></i> 09 878676</div>
            <div className="float-left">
                <i type="button" className="fas fa-shopping-bag"></i> | 
                <span className="dropdown">
                    &nbsp;<i type="button" className="fas fa-globe"  id="langDropDown" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="langDropDown" style={{minWidth:'60px'}}>
                        <li><a className="dropdown-item active">Fr</a></li>
                        <li><a className="dropdown-item">En</a></li>
                    </ul>
                </span>
            </div>
        </nav>
    );
}
  
export {FixedNavTop};