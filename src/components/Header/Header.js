import React from 'react';
import './header.scss';

import MenuList from '../Menu-List/menu-list';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="top-header d-flex justify-content-end align-items-center">
          <a href="http://ararat.aist.fun/">
            <img src="/img/facebook.svg" alt="" />
          </a>
          <a href="http://ararat.aist.fun/">
            <img src="/img/instagram.svg" alt="" />
          </a>
          <a href="http://ararat.aist.fun/">
            <img src="/img/youtube.svg" alt="" />
          </a>
        </div>
        <nav className="navbar navbar-expand-lg my-navbar">
          <a className="navbar-brand" href="/" aria-label="home page">
            <img src="/img/logo.svg" alt="" />
          </a>
          <button
            id="nav-icon3"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <MenuList />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
