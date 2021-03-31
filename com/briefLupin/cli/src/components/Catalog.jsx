import React, { Component } from 'react';
import oom2 from '../img/jewelry.png';
import axios from 'axios';
class CatalogPage extends Component {
    state = {
        products:[],
        spiner:false
    }
    componentDidMount(){
        this.getProduct()
    }

    async getProduct() {
        const timeOut = 1000
        try {
            await axios.get('http://localhost:8080/api/product').then(response=>{
                const products = response.data.map(p=>
                    <div className="col-sm-3" key={p._id}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={oom2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description}</p>
                                <a href="#" className="btnCss btn btn-warning" style={{borderRadius:'30px'}}>Add to card</a>
                            </div>
                        </div>
                    </div>
                )
                setTimeout(() => {
                    this.setState({products})
                    this.setState({spiner:true})
                    // console.log(products);
                    // console.log(this.state.spiner);
                }, timeOut);
                
            })
        } catch (error) {
            console.log('FAIL !', error.message);
        }
        

    }
     render() { 
        const { spiner, products } = this.state 
        return (
            <div className="container mt-5">
                <div className="row">
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