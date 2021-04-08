import React, { Component } from 'react';
import axios from 'axios';
import {addToCart} from '../actions';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

class CatalogComponentPage extends Component {

    state = {
        products:[],
        spiner:false
    }
     
    
    componentDidMount(){
        this.getProducts()
    }

    async getProducts() {
        
        const timeOut = 1000
        try {
            await axios.get('/api/product').then(response=>{
                const products = response.data.map(prod=>
                    <div className="col-sm-3 mt-2" key={prod._id}>
                        <div className="card m-auto">
                            <img  className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.description}</p>
                                <p className="card-text">{prod.price} Dhs <del className="text-muted"><small>{prod.oldPrice} Dhs</small> </del> </p>
                                <Link to={"/details/"+prod._id} className="btnCss btn btn-dark float-right" style={{borderRadius:'30px'}}>Details</Link>
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
            <div className="container-fluid mt-5">
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      products: state.products
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (idProd)=>{dispatch(addToCart(idProd))}
    }
}
 

const CatalogComponent =  connect(mapStateToProps,mapDispatchToProps)(CatalogComponentPage)
export {CatalogComponent};