import React, { Component } from 'react';
import axios from 'axios';

class OrderPage extends Component {

    state = {
        productDetails :[], 
    }

    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id);
        this.getProductByID(id)
        
    }

    displayPay(){
        // console.log(id);
    }

    getProductByID(id) {
        axios.get('/api/product/'+id).then((response) => {
            // console.log(response.data)
            setTimeout(() => {
                this.setState({
                    productDetails:response.data,
                })
            })
            
        }).catch((err) => {
            console.error(err)
        });
            
    }

    render() { 
        const { productDetails } = this.state

        return (
            <div className="container my-4 pt-5">
                <div className="row">
                    <div className="col-sm-5  border pb-4">
                        <img src={process.env.PUBLIC_URL + '/uploads/'+productDetails.image} className="card-img-top" alt="..."/>
                    </div> 
                    <div className="col-sm-6 card shadow bg-white mb-auto mr-auto ml-auto mt-0">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price Details</li>
                            <i className="list-group-item">

                                Price : <span style={{display:'flex', float:'right'}}>{productDetails.price} Dhs</span><br/>
                                Delivery Charges : <b style={{display:'flex', float:'right', color:'#008020'}}> Free</b>
                            </i>
                            <li className="list-group-item"><b>Total Amount : </b> <b className="d-flex" style={{float:'right'}}>{productDetails.price} Dhs</b></li>
                        </ul>
                        
                        <div className="d-flex justify-content-md-between my-4">
                            <button onClick={()=>this.displayPay()} className="btn btn-warning">PLACE ORDER</button>
                            <a href="/catalog" className="btn btn-warning">BACK</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {OrderPage};