import React, { Component } from 'react';
import { FixedNavTop, NavBar } from './';
import axios from 'axios';
import Swal from 'sweetalert2';
class CartPage extends Component {

    state = {
        cart:[],
        spiner:false
    }
    componentDidMount(){
        this.getCart()
    }

    // delete card 
    cartDelete(idCard){
        Swal.fire({
            title: 'Custom animation with Animate.css',
            confirmButtonText:'Continue&nbsp;<i className="fa fa-arrow-right"></i>',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then(() => {
            axios.delete('http://localhost:8080/api/cart/delete/'+idCard)
            .then(response=>{console.log(response.data);})
        })
    }
    // Get data 
    async getCart() {
        const timeOut = 1000
        try {
            await axios.get('http://localhost:8080/api/cart').then(response=>{
                const cart = response.data.map(cartItem=>
                    <div key={cartItem._id} className="d-flex justify-content-between bg-light border shadow bg-white rounded mt-4 p-3">
                        <b>{cartItem.id_product.name}</b>
                        <input type="number" className="border border-secondary rounded h-75" minLength={1} defaultValue={cartItem.qty} style={{maxWidth:60}}/>
                        <p>{cartItem.id_product.price} Dhs</p>
                        <span type="button" onClick={()=>this.cartDelete(cartItem._id)}><i className="fas fa-trash btn btn-sm btn-outline-info"></i></span>
                    </div>
                )
                setTimeout(() => {
                    this.setState({cart})
                    this.setState({spiner:true})
                }, timeOut);
                
            })
        } catch (error) {
            console.log('FAIL !', error.message);
        }
    }

    render() { 
        const {cart} = this.state
        console.log(cart);
        return (
            <div>
                <FixedNavTop/>
                <NavBar/>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-sm-8 ">
                            {cart}
                        </div>
                        <div className="col-sm-3 card m-auto">
                            <h1>Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-1"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {CartPage};