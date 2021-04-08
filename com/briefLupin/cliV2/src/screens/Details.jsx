import React, { Component } from 'react';
import axios from 'axios';
import { NavBar } from '../components';

class DetailsPage extends Component {

    state = {
        productDetails :[], 
        spiner: false
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id);
        this.getProductByID(id) 
        
    }

    getProductByID(id) {
        axios.get('/api/product/'+id).then((response) => {
            // console.log(response.data)
            setTimeout(() => {
                this.setState({
                    productDetails:response.data,
                    spiner:false
                })
            })
            
        }).catch((err) => {
            console.error(err)
        });
            
    }

    render() { 
        const { productDetails, spiner } = this.state
        // console.log(productDetails);
        return (
            <div>
                <NavBar/>
                <div className="container mt-4">
                    <div className="row">
                        <div className=" col-sm-6">
                            <img src={productDetails.image} alt="" className="img-fluid w-75"></img>
                        </div>
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card card-body">
                                <h5 className="card-title">{productDetails.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{productDetails.price} Dhs <del>{productDetails.oldPrice} Dhs</del></h6>
                                <p className="card-text">{productDetails.description}</p>
                                <button className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}>Add To Cart </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {DetailsPage};