import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/bootstrap-logo.svg';

function Header() {
  return (
    <header>
        <div className="logo mx-auto">
            <img src={logo} alt="Bootstrap Logo" />
        </div>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="products">Products</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="contact">Contact</Link>
            </li>
        </ul>
    </header>
  );
}

export default Header;