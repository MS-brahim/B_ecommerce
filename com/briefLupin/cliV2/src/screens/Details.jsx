import React, { Component } from 'react';
import axios from 'axios';
import { NavBar } from '../components';
import {Link} from 'react-router-dom';

class DetailsPage extends Component {

    state = {
        productDetails :[], 
    }

    componentDidMount(){
        const id = this.props.match.params.id
        // console.log(id);
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
        const { productDetails } = this.state
        // console.log(productDetails);
        return (
            <div>
                <NavBar/>
                <div className="container mt-4">
                    <div className="row">
                        <div className=" col-sm-6">
                            <img src={process.env.PUBLIC_URL+'/uploads/'+ productDetails.image} alt="" className="img-fluid w-75"></img>
                        </div>
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card card-body">
                                <h5 className="card-title">{productDetails.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{productDetails.price} Dhs <del>{productDetails.oldPrice} Dhs</del></h6>
                                <p className="card-text">{productDetails.description}</p>
                                <Link to={"/order/"+productDetails._id} className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {DetailsPage};