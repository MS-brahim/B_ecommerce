import React, { Component } from 'react';
import axios from 'axios';
import '../seller/style.css'
import { FixedNavTop, SideBar } from '../';
import {
    Alert,
    Input,
    FormFeedback
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

class DashboardAdmin extends Component {
    state = {
        sellers:[],
        spiner:false
    }
    componentDidMount(){
        this.getSellers()
    }

    _handleFormSubmitProd(values){
        console.log(values);
        axios.post('http://localhost:8080/api/user/save', {
            full_name: values.full_name,
            email: values.email,
            phone: values.phone,
            password: values.password,
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

    deleteSeller(id){
        axios.delete('http://localhost:8080/api/user/delete/'+id).then(()=>{
            console.log('is deleted');
        })
    }

    validSeller(id){
        
        axios.patch('http://localhost:8080/api/user/validate/'+id).then(()=>{
            console.log('is valid');
        })
    }

    async getSellers() {
        const timeOut = 600
        try {
            await axios.get('http://localhost:8080/api/user').then(response=>{
                
                const sellers = response.data.map((seller,i)=>
                
                    <tr key={seller._id}>
                        <th scope="row">{i+1}</th>
                        <td>{seller.full_name}</td>
                        <td>{seller.phone}</td>
                        <td>{seller.email} </td>
                        <td>{seller.cin} </td>
                        <td width="80">
                            {
                                seller.is_valid ? 
                                (
                                    <button type="button" className="btn btn-success btn-sm" onClick={()=>this.validSeller(seller._id )}>Valid</button>
                                ) : (
                                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.validSeller(seller._id)}>NoValid</button>
                                )
                            }
                        </td>
                        <td width="50"><small type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.deleteSeller(seller._id)}><i className="fas fa-trash"></i></small></td>
                    </tr>
                )
                setTimeout(() => {
                    this.setState({sellers})
                    this.setState({spiner:true})
                }, timeOut);
                
            })
        } catch (error) {
            console.log('FAIL !', error.message);
        }
        

    }
     render() { 
        const { sellers } = this.state 
        return (
            <div className="container-fluid">
                <FixedNavTop/>
                <SideBar/>
                <div className="main mt-5">
                    <div className="well well-sm">Small Well</div>
                    <div className="card mt-4">
                        <div className="card-header">
                            Sellers
                            <button type="button" className="btn btn-dark btn-sm" style={{float:'right'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                new seller
                            </button>
                            {/* model button  */}
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
                                                    <div className="mb-3">
                                                        <label htmlFor="category" className="form-label">Category</label>
                                                        <input className="form-control form-control-sm" id="category" type="text"/>
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
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">CIN</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sellers}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export  {DashboardAdmin};