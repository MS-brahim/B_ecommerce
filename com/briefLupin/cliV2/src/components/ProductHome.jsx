import { connect } from 'react-redux';
import React, { Component } from 'react';
import {singleProduct} from '../actions/product_action';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ProductHomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            singleProd:[],
        };
    }

    componentDidMount(){
        this.getSingleProd();
    }
    
    async getSingleProd (){
        await axios.get('/api/product/single/1').then(response=>{
            console.log(response.data[0].name);
            this.setState({
                singleProd:response.data[0],
            })
        })
    }

    render() { 
        const {singleProd} = this.state
        // console.log(singleProd);
        return (
            <div>
                <div className="container mt-4">
                    <div className="row">
                        <div className=" col-sm-6">
                            <img src={singleProd.image} alt="" className="img-fluid w-75"></img>
                        </div>
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card-body">
                                <h5 className="card-title">{singleProd.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{singleProd.price} Dhs <del>{singleProd.oldPrice} Dhs</del></h6>
                                <p className="card-text">{singleProd.description}</p>
                                <Link to={"/details/"+singleProd._id} className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}>Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (fetchingSingleProd) => {
     return {
        fetching:fetchingSingleProd.fetching,
        fetchingSingleProd:fetchingSingleProd.fetchinSingleProd 
    };
};
const ProductHome = connect(mapStateToProps,{singleProduct})(ProductHomeComponent)
export {ProductHome};