import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon} from './';
 
const FixedNavTop = () => {

    return (
        <nav className="navbar fixed-top navbar-light bg-warning px-5">
            <div className="float-right"><i className="fab fa-whatsapp"></i> 09 87 86 76 34</div>
            <div className="float-left">
                <CartIcon/>
                <Link  to="/cart" className="text-dark">
                    <i type="button" className="fas fa-shopping-bag"></i>
                </Link> |
                <span className="dropdown">
                    &nbsp;<i type="button" className="fas fa-globe"  id="langDropDown" data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="langDropDown" style={{minWidth:'60px'}}>
                        <li><Link className="dropdown-item active">Fr</Link></li>
                        <li><Link className="dropdown-item">En</Link></li>
                    </ul>
                </span>
            </div>
        </nav>
    );
}
  
export {FixedNavTop};