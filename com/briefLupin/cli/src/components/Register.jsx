import React, { Component } from 'react';
import storeIcon from '../img/store.png'
import clientIcon from '../img/client.png'
 
class Register extends Component {
    displayForm(){
        
    }
    render() { 
        return (
            <div>
               <div className="modal fade" id="registerModel" tabIndex="-1" aria-labelledby="registerModelLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="registerModelLabel">Register</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className=" row modal-body">
                                <div className="col-sm-6">
                                    <div className="card" type="button" onClick={()=> this.displayForm()}>
                                        <img src={clientIcon} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-text">Vendeur</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card" type="button">
                                        <img src={storeIcon} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-text">Client</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {Register};