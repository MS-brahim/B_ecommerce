import React, { Component } from 'react';
import oom2 from '../img/jewelry.png';

class CatalogPage extends Component {
    render() { 
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={oom2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btnCss btn btn-warning" style={{borderRadius:'30px'}}>Add to card</a>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export  {CatalogPage};