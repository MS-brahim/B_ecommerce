import React, { Component } from 'react';
import { NavBar, CatalogComponent } from '../components';

class CatalogPage extends Component {
    render() { 
        return (
            <div>
                <NavBar/>
                <CatalogComponent/>
            </div>
        );
    }
}
 
export {CatalogPage};