import React, { Component } from 'react';
import axios from 'axios';
import './style.css'
import { FixedNavTop, SideBar } from '../';
import {
    Alert,
    Input,
    FormFeedback
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

class DashboardSeller extends Component {
    state = {
        products:[],
        categories:[],
        spiner:false
    }
    componentDidMount(){
        this.getProduct()
        this.getCategories()
    }

    _handleFormSubmitProd(values){
        console.log(values);
        axios.post('http://localhost:8080/api/product/save', {
            image: values.image,
            name: values.name,
            oldPrice: values.oldPrice,
            price: values.price,
            description:values.description,
            category:values.category,
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


    async getCategories (){
        try {
            await axios.get('http://localhost:8080/api/category').then(response=>{
                const categories = response.data.map((category,i)=>
                    <tr key={category._id}>
                        <th scope="row">{i+1}</th>
                        <td>{category.image}</td>
                        <td>{category.name}</td>
                        <td width="60"><button type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.deleteProd(category._id)}><i className="fas fa-trash"></i></button></td>
                        <td width="60"><button type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.updateProd(category._id)}><i className="far fa-edit"></i></button></td>
                    </tr>
                )
                setTimeout(() => {
                    this.setState({categories})
                    console.log(categories);
                    this.setState({spiner:true})
                }, 600);
                
            })
        } catch (error) {
            console.log('FAIL !', error.message);
        }
    }

    deleteProd(id){
        axios.delete('http://localhost:8080/api/product/delete/'+id).then(()=>{
            console.log('is deleted');
        })
    }
    async getProduct() {
        const timeOut = 600
        try {
            await axios.get('http://localhost:8080/api/product').then(response=>{
                const products = response.data.map((prod,i)=>
                    <tr key={prod._id}>
                        <th scope="row">{i+1}</th>
                        <td>{prod.image}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price} <small>{prod.oldPrice}</small></td>
                        <td>{prod.description}</td>
                        <td>{prod.id_category.name}</td>
                        <td width="60"><button type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.deleteProd(prod._id)}><i className="fas fa-trash"></i></button></td>
                        <td width="60"><button type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.updateProd(prod._id)}><i className="far fa-edit"></i></button></td>
                    </tr>
                )
                setTimeout(() => {
                    this.setState({products})
                    this.setState({spiner:true})
                }, timeOut);
                
            })
        } catch (error) {
            console.log('FAIL !', error.message);
        }
        

    }
     render() { 
        const { products, categories } = this.state 
        return (
            <div className="container-fluid">
                <FixedNavTop/>
                <SideBar/>
                <div className="main mt-5">
                    <div className="well well-sm">Small Well</div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    Orders
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    Categories
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {categories}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card mt-4">
                        <div className="card-header">
                            Products
                            <button type="button" className="btn btn-dark btn-sm" style={{float:'right'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                new product
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
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">price</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products}
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
 
export  {DashboardSeller};