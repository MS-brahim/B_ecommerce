import React, { Component } from 'react';
 
class Login extends Component {
    render() { 
        return (
            <div>
               <div className="modal fade" id="loginModel" tabIndex="-1" aria-labelledby="loginModelLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModelLabel">Logo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div className="modal-body">
                            login
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {Login};