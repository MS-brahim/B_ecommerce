import React, { Component } from 'react';
import { FixedNavTop, NavBar } from './';
 
class CartPage extends Component {
    render() { 
        return (
            <div>
                <FixedNavTop/>
                <NavBar/>
                <div className="row container d-flex justify-content-around mt-4">
                    <div class="col-sm-3 jumbotron border my-2">
                        <h1 class="display-4">Hello, world!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-1"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>
                    <div class="col-sm-8 my-2 d-flex justify-content-around">
                        <h1>deede</h1>
                        <p>dededed</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export {CartPage};