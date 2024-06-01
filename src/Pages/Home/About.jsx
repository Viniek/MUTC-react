import "./About.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
function Social({ icon, description }) {
  return (
    <section className="socials">
      <p>
        {icon} {description}
      </p>
    </section>
  );
}
function About() {
  return (
    <div className="about">
      <div className="socials">
        <div className="contactinfo">
      <h1>School Contact Info</h1>
<h2>Office of the Dean </h2>
P.O.Box 75-10200<br/>
Murang’a, Kenya<br/><br/>

+254743209259<br/>
MUTC@mut.ac.ke


<div className="links">
        <p>Our social platforms</p>
        <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/viniek" target="blank" >Instagram</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/viniek" target="blank" >Facebook</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >Twitter</Link>} />
      </div>
</div>
</div>

      <div className="aboutus">
        
      </div>
      <div className="vision">
      <h1>Philosophy</h1>
<p>Murang’a University of Technology is committed to knowledge creation and advancement through
   innovative strategies and technologies for prosperity.</p>
      </div>

      <div className="vision">
      <h1>vision</h1>
<p>Murang’a University of Technology is committed to knowledge creation and advancement through
   innovative strategies and technologies for prosperity.</p>
      </div>
    </div>
  );
}

export default About;
