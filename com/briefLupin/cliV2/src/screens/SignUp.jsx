import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logo from './assets/logo.png';

import {SignUp} from '../actions';

import {
    Alert,
    Input,
    FormFeedback
} from 'reactstrap';

class SignUpPage extends Component {
     
    componentDidUpdate(){
        const { error, register } = this.props;
        if (error && this.bag) {
            this.bag.setSubmitting(false);
        }

        if (register) {
            this.props.history.push('/sign-in')
        }
    }

    _handleFormSubmit(values, bag){
        console.log(values);
        this.props.SignUp(values)
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
                        <div className="modal-content bg-dark" style={{boxShadow: '5px -400px 43px 600px #212529', marginTop:'100px'}}>
                        {this._renderErrorIfAny()}
                            <Formik
                                initialValues = {{full_name:"", email:"", phone:"", password:"", cin:""}}
                                onSubmit={this._handleFormSubmit.bind(this)}
                                validationSchema={Yup.object().shape({
                                    full_name:Yup.string().required(),
                                    email:Yup.string().email().required(),
                                    phone:Yup.string().min(10).required(),
                                    password:Yup.string().min(8).required(),
                                    cin:Yup.string().min(10).required(),
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
                                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-smile"></i></span>
                                                <Input 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur} 
                                                    invalid={errors.full_name && touched.full_name}
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Full name"
                                                    name="full_name" 
                                                />
                                                {errors.full_name && touched.full_name ? (
                                                    <FormFeedback  className="ml-4">{errors.full_name}</FormFeedback>
                                                ):null}
                                            </div>
                                            <div className="input-group mt-4">
                                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-at"></i></span>
                                                <Input 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur} 
                                                    invalid={errors.email && touched.email}
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Address email"
                                                    name="email" 
                                                />
                                                {errors.email && touched.email ? (
                                                    <FormFeedback  className="ml-4">{errors.email}</FormFeedback>
                                                ):null}
                                            </div>
                                            <div className="input-group mt-4">
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
                                            <div className="input-group mt-4">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-id-card "></i></span>
                                                <Input 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur} 
                                                    invalid={errors.cin && touched.cin}
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="CIN"
                                                    name="cin" 
                                                />
                                                {errors.cin && touched.cin ? (
                                                    <FormFeedback  className="ml-4">{errors.phone}</FormFeedback>
                                                ):null}
                                            </div>
                                        </div>
                                        <div className="modal-footer d-flex justify-content-between">
                                            <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={!isValid||isSubmiting}>Sign up</button>
                                            <Link to='/sign-in' type="button" className="text-white" >Have an account? Sign In</Link>
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
        register : auth.register,
        error    : auth.error
    }
}

const SignUpScreen = connect(mapStateToProps, { SignUp })(SignUpPage)
export {SignUpScreen};