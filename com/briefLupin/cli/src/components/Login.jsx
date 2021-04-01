import React, { Component } from 'react';
import logo from '../img/logo.png';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {
    Alert,
    Input,
    FormFeedback
} from 'reactstrap';
import axios from 'axios';

class Login extends Component {

    _handleFormSubmit(values){
        
        axios.post('http://localhost:8080/api/user/login', {
            phone: values.phone,
            password:values.password,
        }).then((response) => {
            localStorage.setItem('auth-token', response.data.token)
            localStorage.setItem('auth-id', response.data.auth._id)
            let authRole = response.data.auth.role;
            switch (authRole) {
                case 'admin':
                    // this.props.history.push('/admin')
                    break;
                case 'seller':
                    console.log('is seller');
                    // this.props.history.push('/seller')
                    break;
                case 'client':
                    console.log('is client');
                    // this.props.history.push('/')
                    break;       
            
                default:
                    break;
            }
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        });
    }

    _renderErrorIfAny(){
        const { error } = this.props;
        if (error) {
            return (<Alert color="danger">{error}</Alert>);
        }
    }
    render() { 
        return (
            <div>
               <div className="modal fade" id="loginModel" tabIndex="-1" aria-labelledby="loginModelLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark" style={{boxShadow: '5px 6px 10px 540px #212529', marginTop:'100px'}}>
                        {this._renderErrorIfAny()}
                            <Formik 
                                initialValues = {{phone:"", password:""}}
                                onSubmit={this._handleFormSubmit.bind(this)}
                                validationSchema={Yup.object().shape({
                                    phone:Yup.string().min(10).required(),
                                    password:Yup.string().min(8).required()
                                })}
                                render={({
                                    handleChange,
                                    handleSubmit,
                                    isValid,
                                    isSubmiting,
                                    handleBlur,
                                    errors,
                                    touched,
                                })=>(
                                    <form>
                                        <div className="modal-header" style={{display:'contents'}}>
                                            <center className="modal-title" id="loginModelLabel">
                                                <img src={logo} alt="logo" width="200"/>
                                            </center>
                                        </div>
                                        <div className="modal-body">
                                            <div className="input-group">
                                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-phone-square-alt"></i></span>
                                                <Input 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur} 
                                                    invalid={errors.phone && touched.phone}
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Phone number"
                                                    name="phone" 
                                                />
                                                {errors.phone && touched.phone ? (
                                                    <FormFeedback  className="ml-4">{errors.phone}</FormFeedback>
                                                ):null}
                                            </div>
                                            <div className="input-group mt-4">
                                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-unlock-alt"></i></span>
                                                <Input 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur} 
                                                    invalid={errors.password && touched.password}
                                                    type="password" 
                                                    className="form-control" 
                                                    placeholder="********"
                                                    name="password" 
                                                />
                                                {errors.password && touched.password ? (
                                                    <FormFeedback>{errors.password}</FormFeedback>
                                                ):null}
                                            </div>
                                        </div>
                                        <div className="modal-footer d-flex justify-content-between">
                                            <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={!isValid||isSubmiting}>Login</button>
                                            <a href='#' data-bs-dismiss="modal" aria-label="Close" type="button" className="text-white" data-bs-toggle="modal" data-bs-target="#registerModel">Create new account</a>
                                        </div>
                                    </form>
                                )}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {Login};