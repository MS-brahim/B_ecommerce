import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logo from './assets/logo.png';

import {SignIn} from '../actions';

import {
    Alert,
    Input,
    FormFeedback
} from 'reactstrap';

class SignInPage extends Component {
     
    componentDidUpdate(){
        const { error, isAuth, auth } = this.props;
        if (error && this.bag) {
            this.bag.setSubmitting(false);
        }
        
        if (isAuth) {
            switch (auth.role) {
                case 'admin':
                    this.props.history.push('/admin/dashboard')
                    break;
                case 'seller':
                    this.props.history.push('/seller/dashboard')
                    break;
                case 'client':
                    this.props.history.push('/')
                    break;       
            
                default:
                    break;
            }
        }
    }

    _handleFormSubmit(values, bag){
        this.props.SignIn(values)
        this.bag = bag;
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
               <div>
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark" style={{boxShadow: '5px -390px 43px 600px #212529', marginTop:'100px'}}>
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
                                            <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={!isValid||isSubmiting}>Sign in</button>
                                            <Link to='/sign-up' type="button" className="text-white" >Create new account</Link>
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

const mapStateToProps = ({ auth }) =>{
    return {
        attempting : auth.attempting,
        error      : auth.error,
        isAuth     : auth.isAuth,
        auth       : auth.auth
    }
}

const SignInScreen = connect(mapStateToProps, { SignIn })(SignInPage)
export {SignInScreen};