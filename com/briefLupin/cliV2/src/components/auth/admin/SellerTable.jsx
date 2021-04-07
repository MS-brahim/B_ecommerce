import React, { Component } from 'react';
import axios from 'axios';
import {Spinner} from '../../Spinner';


class SellerTable extends Component {
    state= {
        sellers:[],
        spiner:false
    }

    componentDidMount(){
        this.getSellers()
    }

    validSeller(id){
        
        axios.patch('/api/user/validate/'+id).then(()=>{
            console.log('is valid');
        })
    }

    async getSellers() {
        const timeOut = 600
        try {
            await axios.get('/api/user').then(response=>{
                
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
        const { sellers, spiner } = this.state
        return (
            <div className="card">
                <div className="card-header">
                    <b className="card-title" >All Products</b> 
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-borderless m-0 p-0">
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
                                {
                                spiner ? sellers:
                                <tr>
                                    <th scope="row"><Spinner/> </th>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                    <td><Spinner/> </td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {SellerTable};