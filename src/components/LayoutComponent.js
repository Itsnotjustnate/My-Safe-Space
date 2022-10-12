import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import logo from '../images/logo 1-1.png';

function Layout() {
    return (
      <div>
        <nav>
          
          <ul className="Navbar">
            <li>
              <Link to="/" className="HeaderLink"><img src={logo} alt="Logo" className="logo"/></Link>
            </li>
            <li>
              <Link to="/downloads" className="HeaderLink">Downloads</Link>
            </li>
            <li>
              <Link to="/aboutus" className="HeaderLink">About Us</Link>
            </li>
            <li>
              <Link to="/docs" className="HeaderLink">Docs</Link>
            </li>
            <li>
              <Link to="/articles" className="HeaderLink">Articles</Link>
            </li>
            <li>
              <button className="DownloadButton">Download</button>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }

  export default Layout;