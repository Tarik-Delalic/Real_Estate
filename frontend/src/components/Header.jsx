import React from 'react'

const Header = () => {
    return (

        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
                <div className="container-fluid">
                    <a className="navbar-brand">Real Estate</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page">Offer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About us</a>
                            </li>
                            <li className="nav-item ms-auto">
                                <form className="form-inline d-flex justify-content-center">
                                    <input className="form-control mr-sm-3" type="search" placeholder="Search"   aria-label="Search"></input>
                                    <button className="btn btn-outline-success  my-2 my-sm-0">Search</button>
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