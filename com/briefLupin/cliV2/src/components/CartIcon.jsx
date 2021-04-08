import React from 'react';
import { connect } from 'react-redux';

const CartItem = (props) => {

    return (
        <small className="badge bg-danger" style={{position:'absolute', marginLeft:'-14px'}}></small>
    );
}

const mapStateToProps = (state) => {
     return {
        // totalQty : state.cartItems.reduce((total, item) => total + item.qty, 0)
    };
};

const CartIcon = connect(mapStateToProps)(CartItem) 
export {CartIcon};