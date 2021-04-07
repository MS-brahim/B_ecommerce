import React, { Component } from 'react';
import { FixedNavTop, NavBar, CatalogComponent } from '../components';

class CatalogPage extends Component {
    render() { 
        return (
            <div>
                <FixedNavTop/>
                <NavBar/>
                <CatalogComponent/>
            </div>
        );
    }
}
 
export {CatalogPage};