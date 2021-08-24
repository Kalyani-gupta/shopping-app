import React from 'react';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@material-ui/icons/LocalMall';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Shop</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/bag" className="nav-link">Bag
                            <LocalMallIcon/>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <nav className="navbar navbar-expand-lg bg-dark">
        //     <div className="navbar-header">
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item">
        //                 <Link to="/" className="nav-link">Shop</Link>
        //             </li>
        //             <li className="nav-item" className="nav-link"><Link to="/cart">Cart</Link>
        //                 <ShoppingCartIcon/>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default Navbar