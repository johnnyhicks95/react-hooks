import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link  to="/" className="navbar-brand" >useContext</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link exact activeClassName="active" to="/" className="nav-item nav-link " >Home <span className="sr-only">(current)</span></Link>
                    <Link exact activeClassName="active" to="/about" className="nav-item nav-link" >About</Link>
                    <Link exact activeClassName="active" to="/login" className="nav-item nav-link" >Login</Link></div>
            </div>
        </nav>
    )
}
