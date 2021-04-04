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
            .then(response=>{console.log(response.data);window.location.reload(); })
        })
    }
    // Get data 
    async getCart() {
        try {
            await axios.get('http://localhost:8080/api/cart/').then(response=>{
                console.log(localStorage.getItem('cartItem'));
                const cart = response.data.map(cartItem=>
                    <div key={cartItem._id} className="d-flex justify-content-between bg-light border shadow bg-white rounded mt-4 p-3">
                        <b>{cartItem.id_product.name}</b>
                        <input type="number" className="border border-secondary rounded h-75" defaultValue={cartItem.qty} style={{maxWidth:60}}/>
                        <p>{cartItem.id_product.price} Dhs</p>
                        <span type="button" onClick={()=>this.cartDelete(cartItem._id)}><i className="fas fa-trash btn btn-sm btn-outline-info"></i></span>
                    </div>
                )
                this.setState({cart})
                this.setState({spiner:true})
                
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
                        <div className="col-sm-8  border pb-4">
                            {cart}
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