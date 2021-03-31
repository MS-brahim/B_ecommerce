import React, { Component } from 'react';
import storeIcon from '../img/store.png'
import clientIcon from '../img/client.png'
import logo from '../img/logo.png';

class Register extends Component {
    displayForm(roleRegister){
        const registerForm = `
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        `

        var contentBody = document.getElementById("mBody");
        contentBody.innerHTML = registerForm       
    }
    render() { 
        return (
            <div>
               <div className="modal fade" id="registerModel" tabIndex="-1" aria-labelledby="registerModelLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark" style={{boxShadow: '5px 6px 10px 540px #212529'}}>
                            <div className="modal-header"  style={{display:'contents'}} >
                                <center className="modal-title" id="registerModelLabel">
                                    <img src={logo} alt="logo" width="200"/>
                                </center>
                            </div>
                            <div className="row modal-body">
                                <div className="col-sm-6"   id="mBody">
                                    <div className="card bg-warning" type="button" onClick={()=> this.displayForm('vendeur')}>
                                        <img src={clientIcon} className="card-img-top" alt="..."/>
                                        <div className="card-body text-center">
                                            <b className="card-text">Vendeur</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6"   id="mBody">
                                    <div className="card bg-warning" type="button" onClick={()=> this.displayForm('client')}>
                                        <img src={storeIcon} className="card-img-top" alt="..."/>
                                        <div className="card-body text-center">
                                            <b className="card-text">Client</b>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-white mt-4 d-flex justify-content-end">
                                    <a href='#' data-bs-dismiss="modal" aria-label="Close" type="button" className="text-white" data-bs-toggle="modal" data-bs-target="#loginModel">have account login</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {Register};