import React, { Component } from 'react';
import { FixedNavTop, NavBar, CartItem } from '../components';
import axios from 'axios';

class CartPage extends Component {


    render() { 
        
        return (
            <div>
                <FixedNavTop/>
                <NavBar/>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-8  border pb-4">
                            <CartItem/>
                        </div>
                        <div className="col-sm-3 card m-auto mt-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price Details</li>
                                <i className="list-group-item">

                                    Price (3 Item) : <span style={{display:'flex', float:'right'}}> 23 Dhs</span><br/>
                                    Delivery Charges : <b style={{display:'flex', float:'right', color:'#008020'}}> Free</b>
                                </i>
                                <li className="list-group-item"><b>Total Amount : </b> <b className="d-flex" style={{float:'right'}}>1222 Dhs</b></li>
                            </ul>
                            
                            <div className="d-flex justify-content-md-between my-4">
                                <a href="/order" className="btn btn-warning">PLACE ORDER</a>
                                <a href="/catalog" className="btn btn-warning">BACK</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {CartPage};