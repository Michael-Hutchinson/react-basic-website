import React from 'react';

function Header() {
  return (
    <header>
        <div className="logo">
            <img src="" alt="Bootstrap Logo" />
        </div>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="products">Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact">Contact</a>
            </li>
        </ul>
    </header>
  );
}

export default Header;