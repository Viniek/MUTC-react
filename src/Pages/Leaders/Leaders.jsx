import "./Leaders.css";
  
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



function Leaders() {
  return (
    <section className="Leaders">
      <div className="introduction">
        <h1>
          Meet the Leadership Team of Murang'a University Tech Club (MUTC)
        </h1>
        <p>Dedicated Leaders Driving Innovation and Excellence </p>
      </div>
      
      {/* John Ndia */}
            <div className="ourleaders">
        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="dr John ndia" />
          <h1>Dr. John Ndia</h1>
          <p>
            Dr. John Ndia is a distinguished professor and an esteemed patron of
            the Murang'a University Tech Club. With over 20 years of experience
            in the field of computer science and technology,
          </p>
        </div>
        {/* Victory Njeri */}
        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="Victory Njeri" />
          <h1>Victory Njeri</h1>
          <p>
          Chairperson of the club.She is a dedicated and ambitious Computer Scientist.
          </p>
          <div className="links">
          <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>
        {/* Allan Muhari */}
        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="allan" />
          <h1>Allan Muhari</h1>
          <p>
          Vice Chairperson of the club. He is a dedicated and ambitious programmer.
          </p>
          <div className="links">         
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>
        {/* Bridget Gitonga */}
        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="bridget" />
          <h1>Bridget Gitonga</h1>
          <p>Secretary of the club.She is an ambitious and dedicated Programmer.</p>
           <div className="links">          
       <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>
        {/* Ruth Mutisya */}
      </div>

      <div className="ourleaders">
        <div className="victory">
        <img src="../src/assets/hero.jpg" alt="Webster Ifedha" />
          <h1>Ruth Mutisya</h1>
          <p>
          Treasurer of the club. She is a dedicated and ambitious programmer.
          </p>
          <div className="links">          
       <Social icon={<FaInstagramSquare/>} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>
        {/* Webster Ifedha */}

        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="Webster Ifedha" />
          <h1>Webster Ifedha</h1>
          <p>
          Cyber security lead. He is a dedicated and ambitious programmer.
          </p>
          <div className="links">
          <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>

        {/* Manase Gunga */}

        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="Manase Gunga" />
          <h1>Manase Gunga</h1>
          <p>
          UI/UX lead. He is an ambitious and dedicated Programmer.</p>
          <div className="links">
          <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>
        {/*Carolyne Githenduka */}

        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="Carolyne Githenduka" />
          <h1>Carolyne Githenduka</h1>
          <p>
          web development lead. She is adedicate and ambitious Programmer.
          </p>
          <div className="links">
          <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>

        {/* Stanley Amunze */}
      </div>
      <div className="ourleaders">
        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="Stanley Amunze" />
          <h1>Stanley Amunze</h1>
          <p>
          Mobile apps development lead. He is a dedicated and ambitious Programmer.
          </p>
          <div className="links">
          <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>

        {/* Paul Karanja */}

        <div className="victory">
          <img src="../src/assets/hero.jpg" alt="Carolyne Githenduka" />
          <h1>Paul Karanja</h1>
          <p>
          cloud engineering lead. He is a dedicated and ambitious Programmer.
          </p>
          <div className="links">
          <Social icon={<FaInstagramSquare />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaFacebookF />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
        <Social icon={<FaXTwitter />} description={<Link to="https://github.com/viniek" target="blank" >--</Link>} />
          </div>
        </div>

        
      </div>

      {/* The End... */}
    </section>
  );
}
export default Leaders;
