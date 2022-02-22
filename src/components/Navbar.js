import "../styles/navbar.scss";
import logo from "../images/igLogo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "./Menu.js";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
};

export default Navbar;