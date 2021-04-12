import React, { Component } from 'react';
import {
    SideBarSeller,
    AnnonceComponent,
    
} from '../../components';

    
class SuperAdminPage extends Component {
    
    render() { 
        return (
            <div className="container-fluid">
                <SideBarSeller/>
                <div className="main mt-5">
                    <div className="alert alert-dark">Dashboard</div>
                    <AnnonceComponent/>
                </div>
                
            </div>
        );
    }
}
 
export {SuperAdminPage};