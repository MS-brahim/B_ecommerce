import React from 'react';
import { connect } from 'react-redux';

const CartItem = (Props) => {
    
    return (
        <small className="badge bg-danger" style={{position:'absolute', marginLeft:'-14px'}}>1</small>
    );
}

const mapStateToProps = (state) => {
     return {
        // totalQty : state.cart.reduce((total, item) => total + item.qty, 0)
    };
};

const CartIcon = connect(mapStateToProps)(CartItem) 
export {CartIcon};