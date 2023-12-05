import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext';
import './Header.css'

const Header = () => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log Out successfully')
            })
            .catch(e => {
                console.error('log out error', e)
            })
    }



    return (
        <div className='  '>
            <nav className="navbar  navbar-expand-lg text-white">
                <div className="container">
                    <Link className="navbar-brand text-white" href="#">Travel Guide</Link>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='/hotel/1' className="dropdown-item" href="#">Tea garden</Link></li>
                                    <li><Link to='/hotel/2' className="dropdown-item" href="#">Hanging Bridge</Link></li>
                                    <li><Link to='/hotel/3' className="dropdown-item" href="#">Kuakata</Link></li>
                                    <li><Link to='/hotel/4' className="dropdown-item" href="#">Sajek</Link></li>
                                    <li><Link to='/hotel/5' className="dropdown-item" href="#">Paharpur</Link></li>
                                    <li><Link to='/hotel/6' className="dropdown-item" href="#">Ahsan Monzil</Link></li>
                                </ul>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control search-field me-5 border border-white " type="text" placeholder="Search" />
                            {
                                user?.uid ? <Link onClick={handleLogOut} className="btn btn-primary " type="submit">LogOut</Link>
                                    :
                                    <>
                                        <Link to='/login' className="btn btn-primary me-2 text-white" href="#">LogIn</Link>
                                        <Link to='/register' className="btn btn-primary " type="submit">Register</Link>
                                    </>
                            }
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;