import React, { Component } from 'react';
import axios from 'axios';
import {Spinner} from '../../Spinner';
import {ProductSave} from './ProductSave';


class TableProducstSeller extends Component {
    state= {
        products:[],
        spiner:false
    }

    componentDidMount(){
        this.getProduct()
    }

    deleteProd(id){
        axios.delete('http://localhost:8080/api/product/delete/'+id).then(()=>{
            console.log('is deleted');
        })
    }

    async getProduct() {
        const timeOut = 600
        try {
            await axios.get('/api/product').then(response=>{
                const products = response.data.map((prod,i)=>
                    <tr key={prod._id}>
                        <th scope="row">{i+1}</th>
                        <td>{prod.image}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price} Dhs <del>{prod.oldPrice} Dhs</del></td>
                        <td>{prod.description}</td>
                        <td width="60"><button type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.deleteProd(prod._id)}><i className="fas fa-trash"></i></button></td>
                        {/* <td width="60"><button type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.updateProd(prod._id)}><i className="far fa-edit"></i></button></td> */}
                    </tr>
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
        const { products, spiner } = this.state
        return (
            <div className="card">
                <div className="card-header">
                    <b className="card-title" >All Products</b> 
                    <ProductSave/>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-borderless m-0 p-0">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                spiner ? products:
                                <tr>
                                    <th scope="row"><Spinner/> </th>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {TableProducstSeller};