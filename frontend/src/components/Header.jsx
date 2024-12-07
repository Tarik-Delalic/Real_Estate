import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const searchFunction = (e) => {
        e.preventDefault();
        console.log(searchQuery);
        setSearchQuery('');
    }
    return (

        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand">Real Estate</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <NavLink 
                                to='/' 
                                className={({isActive})=> isActive ? 'nav-link active' : 'nav-link' }
                                end
                                aria-current="page">Offer</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink  
                                to='/aboutus' 
                                className={({isActive})=> isActive ? 'nav-link active' : 'nav-link' }
                                end
                                >About us</NavLink >
                            </li>
                            <li className="nav-item ms-auto">
                                <form className="form-inline d-flex justify-content-center">
                                    <input className="form-control mr-sm-3"
                                        type="search" placeholder="Search"
                                        aria-label="Search"
                                        value={searchQuery}
                                        onChange={(e) => { setSearchQuery(e.target.value) }}
                                    ></input>
                                    <div style={{width: '5px'}}></div>
                                    <button className="btn btn-outline-success  my-2 my-sm-0"
                                        onClick={searchFunction}
                                    >Search</button>
                                </form>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header