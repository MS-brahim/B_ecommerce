import React, { Component } from 'react';
import axios from 'axios';

class CartItem extends Component {
    state = {
        carts :[], 
        spinner:false
    }

    componentDidMount(){
        this.getCarts() 
    }

    async getCarts() {
        try {
            await axios.get('/api/product').then(response=>{
                const carts = response.data.map(prodItem=>
                    <div className="d-flex justify-content-between bg-light border shadow bg-white rounded mt-4 p-3" key={prodItem._id}>
                        <b>{prodItem.name}</b>
                        <p>{prodItem.price} Dhs</p>
                        <span type="button" ><i className="fas fa-trash btn btn-sm btn-outline-info"></i></span>
                    </div>
                )
                setTimeout(() => {
                    this.setState({carts, spinner:true})
                }, 2000);
            })
        } catch (error) {
            console.error(error);
        }
    }

    render(){
        const { carts, spinner } = this.state
        console.log(carts);

        return (
            <div>
                {spinner ?  carts :  
                <div className="text-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>} 
            </div>
        );
    }
}
 
 
export {CartItem};