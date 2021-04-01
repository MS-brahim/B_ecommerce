import React from 'react';
 
const SideBar = () => {
    return (
        <div className="sidebar mt-4">
            <a href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="#services"><i className="fa fa-fw fa-wrench"></i> Services</a>
            <a href="#clients"><i className="fa fa-fw fa-user"></i> Clients</a>
            <a href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
        </div>
    );
}
  
export {SideBar};