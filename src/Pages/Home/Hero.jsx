import { Link } from "react-router-dom";
import "./Home.css";
function Hero() {
  return (
    <section className="hero">
      <h1 className="mission">our mission</h1>
      <p className="themission">
        To advance knowledge and technological transfer through teaching,
        training, learning, research, innovation, consultancy and community
        engagement for sustainable development.
      </p>
      <Link to="/aboutus">About us</Link>
    </section>
  );
}
export default Hero;
