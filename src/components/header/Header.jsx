
import { useLocation } from "react-router-dom";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Header = () => {
    const active = useLocation().pathname;
    return (
        <div className="header section section__header">
            <div className="header__logo">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="header__menu">
                <Link to='/' className={`header__menu__link ${active ? 'active' : ''}`}><p>Home</p></Link>
                <Link to='/abouttwg' className={`header__menu__link ${active ? 'active' : ''}`}><p>About TWG</p></Link>
                <Link to='/blog' className={`header__menu__link ${active ? 'active' : ''}`}><p>Blog</p></Link>
                <Link to='/events' className={`header__menu__link ${active ? 'active' : ''}`}><p>Events</p></Link>
                <Link to='/courses' className={`header__menu__link ${active ? 'active' : ''}`}><p>Courses</p></Link>
            </div>
        </div>
    );
};

export default Header;
