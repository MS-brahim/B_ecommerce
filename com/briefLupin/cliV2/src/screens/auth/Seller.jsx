import React, { Component } from 'react';
import {SideBarSeller,
    TableProducstSeller,
} from '../../components';

    
class SellerPage extends Component {
    
    render() { 
        return (
            <div className="container-fluid">
                <SideBarSeller/>
                <div className="main mt-5">
                    <div className="alert alert-dark">Dashboard</div>
                    <div className="">
                        <TableProducstSeller/>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export {SellerPage};