import { Link } from "react-router-dom";
function Bottomheader() {
  return (
    <nav className="navigation_bar">
      <ol className="nav_list">
        <li className="nav_item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav_item">
          <Link to="/Leaders">OUR LEADERS</Link>
        </li>
        <li className="nav_item">
          <Link to="/Tracks">AVAILABLE TRACKS</Link>
        </li>
        <li className="nav_item">
          <Link to="/Events">EVENTS</Link>
        </li>
      </ol>
    </nav>
  );
}
export default Bottomheader;
