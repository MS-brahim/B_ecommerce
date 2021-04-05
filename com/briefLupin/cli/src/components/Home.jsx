import React, { Component } from 'react';
import oom from '../img/perles.png';
import oom2 from '../img/jewelry.png';
import slide1 from '../img/bijoux.png';
import { FixedNavTop, NavBar } from './';
import {SlideCarousel} from './includes/SlideCarousel';
import axios from 'axios';


class HomePage extends Component{
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
        await axios.get('http://localhost:8080/api/product/single/1').then(response=>{
            console.log(response.data[0].name);
            this.setState({
                singleProd:response.data[0],
            })
                
        })
    }

    render() {
        const {singleProd} = this.state
        console.log(singleProd);
        return (
            <div>
                <FixedNavTop/>
                <NavBar/>
                <SlideCarousel/>
                <div className="container mt-4">
                    <div className="row">
                        <div className=" col-sm-6">
                            <img src={oom} alt="" className="img-fluid w-75"></img>
                        </div>
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card-body">
                                <h5 className="card-title">{singleProd.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{singleProd.price} Dhs <del>{singleProd.oldPrice} Dhs</del></h6>
                                <p className="card-text">{singleProd.description}</p>
                                <button className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}> Buy New</button>
                            </div>
                        </div>
                    </div>
                </div>
  
            </div>
        );
    }
}
 
export  {HomePage};