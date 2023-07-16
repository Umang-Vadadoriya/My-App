import React from 'react'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NavLink to='/' className="navbar-brand">React</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink to='/Reducer0' className="nav-link">Counter</NavLink>
                        <NavLink to='/Reducer1' className="nav-link">Billing</NavLink>
                        <NavLink to='/Reducer2' className="nav-link">ToDo's</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
