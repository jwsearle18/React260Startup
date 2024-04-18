import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Register } from './register/register'
import { Address } from './address/address';
import { Orders } from './orders/orders';
import { RenterFoodOptions } from './renterFoodOptions/renterFoodOptions';
import { Signin } from './signin/signin';
import { SocialOrders } from './socialOrders/socialOrders';
import { Vrcompanies } from './vrCompanies/vrCompanies';

export default function App() {
  return (
    <BrowserRouter>
        <div className='app'>
        <header>
        
        <h1>Airestock<sup>&reg;</sup></h1>
        
        <nav>
            <menu>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="register">Register</NavLink></li>
            <li><NavLink to="signin">Sign in</NavLink></li>
            <li><NavLink to="address">Address</NavLink></li>
            <li><NavLink to="orders">Orders</NavLink></li>
            <li><NavLink to="socialOrders">Social Orders</NavLink></li>
            <li><NavLink to="renterFoodOptions">Renter Food Options</NavLink></li>
            
            </menu>
        </nav>

        <hr />
        </header>

        <Routes>
            <Route path='/' element={<Vrcompanies />} exact />
            <Route path='/register' element={<Register />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/address' element={<Address />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/socialOrders' element={<SocialOrders />} />
            <Route path='/renterFoodOptions' element={<RenterFoodOptions />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
        <hr />
        <br />
        <span className="text-reset">Jaden Searle</span>
        <br />
        <a href="https://github.com/jwsearle18/React260Startup">GitHub</a>
        </footer>
    </div>
  </BrowserRouter>
    )

}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}