import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Sidebar() {
  return (
    <aside className="sidebar">
    <img src={Logo} alt="Logo" style={{width: "150px", height:"100px"}}/>
      <h3>Menu</h3>
      <ul>
        <li><NavLink to="/" end>🏠 Dashboard</NavLink></li>
        <li><NavLink to="/about">ℹ️ About</NavLink></li>
      </ul>
    </aside>
  );
}

export default Sidebar;