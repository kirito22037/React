import React from 'react'
import {Link,NavLink} from 'react-router-dom'

class NavBar extends React.Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
            <a className="navbar-brand" href="/">Navbar</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" >Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
};

export default NavBar;