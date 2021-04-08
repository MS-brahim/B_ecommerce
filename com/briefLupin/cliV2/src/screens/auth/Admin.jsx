import React, { Component } from 'react';
import {SideBarSeller,
    SellerTable,
} from '../../components';

    
class AdminPage extends Component {
    
    render() { 
        return (
            <div className="container-fluid">
                <SideBarSeller/>
                <div className="main mt-5">
                    <div className="alert alert-dark">Dashboard</div>
                    <div className="">
                        <SellerTable/>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export {AdminPage};