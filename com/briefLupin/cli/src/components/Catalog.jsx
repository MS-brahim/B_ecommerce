import React, { Component } from 'react';
import oom2 from '../img/jewelry.png';
import axios from 'axios';
import { FixedNavTop, NavBar } from './';
import Swal from 'sweetalert2';

class CatalogPage extends Component {
    state = {
        products:[],
        spiner:false,
        cart:[]
    }
    componentDidMount(){
        this.getProduct()
    }

    async handleAddtoCart(idProd, qty){
        
        try {
            const { cart } = this.state
            console.log(cart);

            if(cart.length===0){
            
                await axios.post('http://localhost:8080/api/cart/save',{
                    id_product:idProd,
                    qty:qty
                }).then(request=>{
                    console.log('new cart : ', request.data);
                    localStorage.setItem('cartID', request.data._id);
                    this.setState({cart:request.data})
                    
                })
            }else {
                const cartID = localStorage.getItem('cartID')

                await axios.patch('http://localhost:8080/api/cart/inc-cart/'+cartID,{
                    id_product:[idProd]
                }).then(request=>{
                    console.log('push new product in cart : ',request.data);
                    this.setState({cart:request.data})
                })    
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    async getProduct() {
        
        const timeOut = 1000
        try {
            await axios.get('http://localhost:8080/api/product').then(response=>{
                const products = response.data.map(prod=>
                    <div className="col-sm-3" key={prod._id}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={oom2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.description}</p>
                                <p className="card-text">{prod.price} Dhs <del className="text-muted"><small>{prod.oldPrice} Dhs</small> </del> </p>
                                <button className="btnCss btn btn-warning" onClick={()=>this.handleAddtoCart(prod._id, '1')} style={{borderRadius:'30px'}}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
                setTimeout(() => {
                    this.setState({products})
                    this.setState({spiner:true})
                }, timeOut);
                
            })
        } catch (error) {
            console.log('FAIL !', error.message);
        }
        

    }
     render() { 
        const { spiner, products } = this.state 
        // console.log(cart);
        return (
            
            <div>
            <FixedNavTop/>
            <NavBar/>
                <div className="row container mt-5">
                    {spiner ? products:
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}
 
export  {CatalogPage};