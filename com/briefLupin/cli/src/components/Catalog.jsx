import React, { Component } from 'react';
import oom2 from '../img/jewelry.png';
import axios from 'axios';
import { FixedNavTop, NavBar } from './';
import Swal from 'sweetalert2';
class CatalogPage extends Component {
    state = {
        products:[],
        spiner:false
    }
    componentDidMount(){
        this.getProduct()
    }

    async handleAddtoCard(idProd, qty){
        try {
            await axios.post('http://localhost:8080/api/card/save',{
                id_product:idProd,
                is_user:localStorage.getItem('auth-id'),
                qty:qty
            }).then(request=>{
                console.log(request.data);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                  
                Toast.fire({
                    icon: 'success',
                    title: ' Join in successfully'
                })

            })
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
                                <a href="#" className="btnCss btn btn-warning" onClick={()=>this.handleAddtoCard(prod._id, '1')} style={{borderRadius:'30px'}}>Add to card</a>
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