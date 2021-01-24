import React, {Component} from 'react';
import {Link} from 'react-scroll';
import BurgerNav from './BurgerNav';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link className="nav-elements"
                activeClass="active" 
                to="main" 
                spy={true} 
                smooth={true} 
                //offset={50} 
                duration={500}>Main </Link>
                
                <Link className="nav-elements"
                activeClass="active" 
                to="about" 
                spy={true} 
                smooth={true} 
                //offset={50} 
                duration={500}>About </Link>

                <Link className="nav-elements"
                activeClass="active" 
                to="contact" 
                spy={true} 
                smooth={true} 
                //offset={50} 
                duration={500}>Contact </Link>

                <Link className="nav-element"
                activeClass="active" 
                to="feature" 
                spy={true} 
                smooth={true} 
                //offset={50} 
                duration={500}>Features </Link>

                <Link className="nav-element"
                activeClass="active" 
                to="resource" 
                spy={true} 
                smooth={true} 
                //offset={50} 
                duration={500}>Resource </Link>
                <BurgerNav />
            </div>
        )
    }
}

export default Navbar;