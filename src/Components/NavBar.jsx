import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=> {

    return (
        
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">

                    <NavLink exact to="/" className="navbar-brand" activeClassName="active">Portfolio</NavLink>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink exact to="/" activeClassName="active" className="nav-link active">Home</NavLink>
                            <NavLink exact to="/About" activeClassName="active" className="nav-link active">Skills</NavLink>
                            <NavLink exact to="/Resume" activeClassName="active" className="nav-link active" >Resume</NavLink>
                            <NavLink exact to="/Projects" activeClassName="active" className="nav-link active" >Projects</NavLink>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;

