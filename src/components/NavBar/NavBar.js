import React from "react";
import "./NavBar.css";
import SriChaitanya from "../../assets/SriChaitanyaLogo.png";
import person from "../../assets/person.jpg";
import search from "../../assets/Vector.png";
// import user from "../../assets/Frame 8081.png";
import hamburger from"../../assets/threeHorizantallines.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Bell from "../../assets/Bell (1).png";

// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

// import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={SriChaitanya} alt="Sri Chaitanya" className="navbar-logo" />

        <div className="search-container">
          <img src={search} className="search-icon" />
          <input type="text" placeholder="Ask for anything" />
        </div>
      </div>

      {/* <div className="navbar-search">
          <div className="search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input type="text" placeholder="Ask for anything" />
          </div>
        </div> */}

      {/* <div className="navbar-right">
        <div className="navbar-user">
          <img src={Bell} className="bell"></img>
          <img src={person} alt="User" className="user-avatar" />
          <div className="user-details">
            <div className="user-num">HYD 256789</div>
            <div className="user-role">Cashier</div>
          </div>
          <span className="dropdown-arrow">
            <FontAwesomeIcon icon={faAngleDown} />{" "}
          </span>
        </div>
        {/* <img src={user} alt="User" className="user-avatar" /> 
      </div> */}
      <div className="navbar-right">
       
        
        <div className="navbar-user">
          <img src={Bell} className="bell" />
          <img src={person} alt="User" className="user-avatar" />
          <div className="user-info">
            <div className="user-num">HYD 256789</div>
            <div className="user-role">Cashier</div>
          </div>
          <span className="dropdown-arrow">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </div>
       <div className="menu">
 <img src={hamburger} className="hamburger"></img>
       </div>
    
    </div>
  );
};

export default Navbar;
