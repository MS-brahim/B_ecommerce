import React, {Component} from 'react';
import { NavBar, ProductHome } from '../components';

class Home extends Component {
    
    render(){
        return (
            <div>
                <NavBar/>
                <ProductHome/>
            </div>
        )
    }
}

export {Home};