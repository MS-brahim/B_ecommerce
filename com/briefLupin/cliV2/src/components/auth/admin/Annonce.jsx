import React, { Component } from 'react';
import axios from 'axios';
import {Spinner} from '../../Spinner';

class AnnonceComponent extends Component {
    state= {
        annonces:[],
        singleAnnonce:[],
        spiner:false
    }

    componentDidMount(){
        this.getAnnonces()
    }

    async getAnnonces() {
        const timeOut = 600
        try {
            await axios.get('/api/user/s-amin/annonces').then(response=>{
                
                const annonces = response.data.map((annonce,i)=>
                
                    <div className="col-sm-3" key={annonce._id}>
                        <div className="card bg-warning" style={{width: "18rem"}}>
                            <img src={annonce.image} className="card-img-top" alt={annonce.image}/>
                            <div className="card-body">
                                <h5 className="card-title">{annonce.title}</h5>
                                <p className="card-text">{annonce.description}</p>
                                {/* <a href="#" className="btn btn-dark">Show Details</a> */}
                            </div>
                        </div>
                    </div>
                )
                setTimeout(() => {
                    this.setState({annonces})
                    this.setState({spiner:true})
                }, timeOut);
                
            })
        } catch (error) {
            console.log('FAIL !', error.message);
        }
    }

    render() { 
        const { annonces, spiner } = this.state
        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <b className="card-title" >All Annonces</b> 
                </div>
                <div className="card-body">
                    <div className="row">
                        {annonces}
                    </div>
                </div>
            </div>
        );
    }
}
 
export {AnnonceComponent};