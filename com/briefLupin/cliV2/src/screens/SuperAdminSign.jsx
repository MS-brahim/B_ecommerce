import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './assets/logo.png';


import {
    Alert,
    Input,
    FormFeedback
} from 'reactstrap';

class SuperAdmin extends Component {

    _handleFormSubmit(values){
        axios.post('/api/user/super-admin/login',{
            email: values.email,
            password: values.password
        }).then((response) => {
            // localStorage.setItem('auth-token', response.data)
            // localStorage.setItem('auth-id', response.data)
            let successLogin = response.data;
            if (successLogin) {
                window.location.href= '/superAdmin/dashboard'
            }
            console.log(response.data)

        }).catch((err) => {
            console.log(err)
        });
        // console.log(values);
    }

    render() { 
        return (
            <div>
               <div>
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark" style={{boxShadow: '5px -690px 43px 600px #ffc107', marginTop:'100px'}}>
                            <Formik
                                initialValues = {{email:"", password:""}}
                                onSubmit={this._handleFormSubmit.bind(this)}
                                validationSchema={Yup.object().shape({
                                    email:Yup.string().email().required(),
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
                                                <Link to="/"><img src={logo} alt="logo" width="200"/></Link>
                                            </center>
                                        </div>
                                        <div className="modal-body">
                                            <div className="input-group">
                                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-at"></i></span>
                                                <Input 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur} 
                                                    invalid={errors.email && touched.email}
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="email number"
                                                    name="email" 
                                                />
                                                {errors.email && touched.email ? (
                                                    <FormFeedback  className="ml-4">{errors.email}</FormFeedback>
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
                                                    <FormFeedback className="ml-4">{errors.password}</FormFeedback>
                                                ):null}
                                            </div>
                                        </div>
                                        <div className="modal-footer d-flex justify-content-between">
                                            <button type="submit" className="btn btn-warning" onClick={handleSubmit} disabled={!isValid||isSubmiting}>Sign in</button>
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

export {SuperAdmin};