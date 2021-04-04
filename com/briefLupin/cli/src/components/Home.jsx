import React, { useState } from 'react';
import oom from '../img/perles.png';
import oom2 from '../img/jewelry.png';
import slide1 from '../img/bijoux.png';
import { FixedNavTop, NavBar } from './';


const HomePage = (props) => {
    
      
        return (
            
            <div>
                <FixedNavTop/>
                <NavBar/>
                <div className="container mt-4">
                    <div className="row">
                        <div className=" col-sm-6">
                            <img src={oom} alt="" className="img-fluid w-75"></img>
                        </div>
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card-body">
                                <h5 className="card-title">jewelry</h5>
                                <h6 className="card-subtitle mb-2 text-muted">2000 Dhs <del>2400 Dhs</del></h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}> Buy New</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card-body">
                                <h5 className="card-title">Bague</h5>
                                <h6 className="card-subtitle mb-2 text-muted">2000 Dhs <del>2400 Dhs</del></h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}> Buy New</button>
                            </div>
                        </div>
                        <div className=" col-sm-6">
                            <img src={oom2} alt="" className="img-fluid w-75"></img>
                        </div>
                    </div>
                </div>
  
            </div>
        );
    
}
 
export  {HomePage};