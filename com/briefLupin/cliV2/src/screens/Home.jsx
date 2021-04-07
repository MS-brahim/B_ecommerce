import React, {Component} from 'react';
import { FixedNavTop, NavBar, ProductHome } from '../components';

class Home extends Component {
    
    render(){
        return (
            <div>
                <FixedNavTop/>
                <NavBar/>
                <ProductHome/>
            </div>
        )
    }
}

export {Home};