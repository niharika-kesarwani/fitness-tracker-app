import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "#a855f7" : ""
  });

  return (
    <ul>
      <li>
        <NavLink to="/" style={isActiveStyle} className="nav_items">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/exercises" style={isActiveStyle} className="nav_items">
          Exercises
        </NavLink>
      </li>
      <li>
        <NavLink to="/food" style={isActiveStyle} className="nav_items">
          Food
        </NavLink>
      </li>
      <li>
        <NavLink to="/goaltracker" style={isActiveStyle} className="nav_items">
          Goal Tracker
        </NavLink>
      </li>
    </ul>
  );
};

export { Navbar };
