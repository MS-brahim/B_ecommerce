import React, { Component } from 'react';
import axios from 'axios';
import {Spinner} from '../../Spinner';

import {
    Alert,
    Input,
    FormFeedback
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

 
class ProductSave extends Component {

    _handleFormSubmitProd(values){
        console.log(values);
        axios.post('/api/product/save', {
            image: values.image.split('C:\\fakepath\\').join(''),
            name: values.name,
            oldPrice: values.oldPrice,
            price: values.price,
            description:values.description,
            id_user:"606320543158a653b421bb1e",
        }).then((response) => {
            
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
               <button type="button" className="btn btn-dark btn-sm" style={{float:'right'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    new product
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {this._renderErrorIfAny()}
                            <Formik 
                            initialValues = {{
                                image:"", 
                                name:"", 
                                price:"",
                                description:"",
                            }}
                                        onSubmit={this._handleFormSubmitProd.bind(this)}
                                            validationSchema={Yup.object().shape({
                                                image:Yup.string().required(),
                                                name:Yup.string().min(6).required(),
                                                price:Yup.number().min(2).required(),
                                                description:Yup.string().min(10).required()
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

                                                
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Create new product</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                <div className="mb-3">
                                                    <label htmlFor="image" className="form-label">Image</label>
                                                    <Input 
                                                        className="form-control form-control-sm" 
                                                        name="image" 
                                                        type="file"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        invalid={errors.image && touched.image}
                                                    />
                                                    {errors.image && touched.image ? (
                                                        <FormFeedback  className="ml-4">{errors.image}</FormFeedback>
                                                    ):null}
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <Input 
                                                        className="form-control form-control-sm" 
                                                        name="name" 
                                                        type="text" 
                                                        placeholder="name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        invalid={errors.name && touched.name}
                                                    />
                                                    {errors.name && touched.name ? (
                                                        <FormFeedback  className="ml-4">{errors.name}</FormFeedback>
                                                    ):null}
                                                </div>

                                                <div className="mb-3">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <label htmlFor="oldPrice" className="form-label">Old price</label>
                                                            <Input 
                                                                className="form-control form-control-sm" 
                                                                name="oldPrice" 
                                                                type="text" 
                                                                placeholder="00.00"  
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="price" className="form-label">Price</label>
                                                            <Input 
                                                                className="form-control form-control-sm" 
                                                                name="price" 
                                                                type="text" 
                                                                placeholder="00.00" 
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                invalid={errors.price && touched.price}    
                                                            />
                                                            {errors.price && touched.price ? (
                                                                <FormFeedback  className="ml-4">{errors.price}</FormFeedback>
                                                            ):null}
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label">Description</label>
                                                    <textarea 
                                                        className="form-control" 
                                                        rows="3" 
                                                        name="description" 
                                                        placeholder="description"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        invalid={errors.description && touched.description} 
                                                        >
                                                        {errors.description && touched.description ? (
                                                            <FormFeedback  className="ml-4">{errors.price}</FormFeedback>
                                                        ):null}
                                                    </textarea>
                                                </div>
                                                </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Save</button>
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
 
export {ProductSave};