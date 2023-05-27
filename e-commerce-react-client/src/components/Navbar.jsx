import { Link, Outlet } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <Link to="/" className="logo-link">E-Commerce JS</Link>
                    </div>

                    <div className="navbar-items">
                        <div className="items">
                            <Link className="item-link" to="/">Home</Link>
                        </div>
                        <div className="items">
                            <Link className="item-link" to="/log-in">Log-in</Link>
                        </div>
                        <div className="items">
                            <Link className="item-link" to="/sign-up">Sign-up</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet/>
        </>
    );
}

export default Navbar;