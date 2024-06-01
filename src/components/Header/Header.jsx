import Topheader from "./Topheader";
import Bottomheader from "./Bottomheader";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <Topheader />
      <Bottomheader />
    </header>
  );
}

export default Header;
