import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import funny from '../assets/secret-image.jpg';

const Header = () => {
    const [mouseOverLogo, setMouseOverLogo] = useState(false);  // want to make logo change upon hovering over it

    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                {/* 
                Learned how to use images as links from here
                https://bobbyhadz.com/blog/react-image-link#:~:text=To%20use%20an%20image%20as,navigate%20to%20the%20specified%20page.&text=Copied! 
                */}
                <Link to="/cool-spa">
                    <img id="logo"
                        alt="Home" 
                        width="auto" 
                        height="100" 
                        src={mouseOverLogo ? funny : logo}
                        onMouseOver={() => setMouseOverLogo(true)}
                        onMouseOut={() => setMouseOverLogo(false)}
                    ></img>
                    {/* I learned about the existence of onMouse events from 
                    https://stackoverflow.com/questions/18032220/how-to-change-source-of-img-tag-on-hover 
                    
                    the way in the link didn't exactly work cuz this is react, so i used states instead*/}
                </Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/cool-spa">
                            Home
                        </Link>
                        <Link className="nav-link" to="/cool-spa/packages">
                            Packages
                        </Link>
                        <Link className="nav-link" to="/cool-spa/products">
                            Products
                        </Link>
                        <Link className="nav-link" to="/cool-spa/appointment">
                            Plan an Appointment
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;