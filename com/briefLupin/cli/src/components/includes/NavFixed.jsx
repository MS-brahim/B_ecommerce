import React from 'react';
 
const FixedNavTop = () => {

    return (
        <nav className="navbar fixed-top navbar-light bg-warning px-5">
            <div className="float-right"><i className="fab fa-whatsapp"></i> 09 87 86 76 34</div>
            <div className="float-left">
                <small className="badge bg-danger">1</small>
                <a  href="/cart" className="text-dark">
                    <i type="button" className="fas fa-shopping-bag"></i>
                </a> |
                 
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