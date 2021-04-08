import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bottom-0 bg-dark py-3" style={{position:'fixed', width:'-webkit-fill-available'}}> 
            <div className="container-fluid d-flex justify-content-between">
                <div className=" text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                    <Link type="button" className="btn btn-outline-success mr-2"><i className="fab fa-whatsapp"></i></Link>
                    <Link type="button" className="btn btn-outline-primary mr-2"><i className="fab fa-facebook"></i></Link>
                    <Link type="button" className="btn btn-outline-danger mr-2"><i className="fab fa-instagram"></i></Link>
                    <Link type="button" className="btn btn-outline-info"><i className="fab fa-telegram"></i></Link>
                </div>
                <div className=" text-white bg-dark">
                    <div className="body">
                        <Link to='/super-a/sign-in' className="text-white"><i className="fas fa-user-shield"></i> Super admin</Link>
                    </div>
                </div>  
            </div>
        </footer>
    );
}
 
 
export {Footer};