import "./Tracks.css";
function Tracks() {
  return <div>

    <section className="header">
      <div className="introduction">
      <h1>  <i>Explore a world of innovation with our tracks</i></h1>
      <p><i><b>where creativity meets technology</b></i></p>
      </div>
  
      <div className="tracks">

        <div className="tracks1">
        <div className="cybersecurity">
          <h1>Cybersecurity</h1><br></br>
        <p>Students who choose the Cyber Security track will delve into the critical 
        aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they 
        will learn about various security protocols, ethical hacking, encryption techniques, and threat
         analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge
          in identifying and mitigating security vulnerabilities. </p>
        </div>
        <div className="cybersecurity">
        
        <h1>UI/UX design</h1><br/><br/>
        <p> Students who enroll in the UI/UX Design track will explore the principles of creating
           user-friendly and visually appealing interfaces. They will learn about user research, wireframing,
            prototyping, and usability testing. Through practical projects and interactive workshops, students 
            will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. 
            </p>
        </div>
        <div className="cybersecurity">
        <h1>Web development</h1><br></br>
        <p>Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic 
          and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS,
           and JavaScript, as well as back-end development with technologies such as Node.js, Express, and 
           databases.</p>
        </div>    
        </div>
        <div className="tracks2">   
        <div className="cybersecurity">
        <h1>Mobile apps development</h1><br></br>
        <p>Students who opt for the Mobile Apps Development track will learn to design and build applications
           for mobile devices. They will explore the basics of mobile app development using platforms such as 
           Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through
            hands-on projects and interactive sessions, students will develop the skills to create 
            user-friendly and efficient mobile applications.</p>
        </div>
        
        
        <div className="cybersecurity">
        <h1>Cloud engineering</h1><br></br>
        <p>Students who choose the Cloud Engineering track will dive into the world of cloud computing and its 
          applications . By the end of the track, students
             will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions,
              ensuring high availability and performance for applications and services.</p>
        </div>
        <div className="cybersecurity">
        <h1>Power Platform</h1><br></br>
        <p>Students who select the Power Platform track will explore the capabilities of Microsoft's Power
           Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. By the end of the track, students will be proficient in developing 
            integrated solutions using the Power Platform, enabling them to transform organizational operations 
            and improve efficiency.</p>
        </div>
        </div>
      </div>
      <section className="form">
    <form className="theform"> 

  <div className="contacts" id="fullname">
  <label htmlFor="fullname">Full Name</label>
  <input type="text" placeholder="Full Name" required />
  </div>

  <div className="contacts" id="email">
  <label htmlFor="email">Email Address</label>
  <input type="email"  placeholder="Email adress" required/>
  </div>

  <div className="contacts" id="course">
  <label htmlFor="course">Current Course</label>
  <input type="text" placeholder="Current Course"required />
  </div>

  <div className="contacts" id="yearofstudy">
  <label htmlFor="yearofstudy">Year Of Study</label>
  <input type="text" placeholder="Year of Study" required />
  </div>

  <div className="contacts" id="tracks">
  <label htmlFor="selecttracks">Select Your Desired Track</label>
  
   <select name="Cyber Security" id="courses" className="contacts">
    <option value="Cyber Security">Cyber Security</option>
    <option value="UI/UX design">UI/UX design</option>
    <option value="Web development">Web development</option>
    <option value="Mobile apps development">Mobile apps development</option>
    <option value="Cloud engineering">Cloud engineering</option>
    <option value="Power Platform">Power Platform</option>
  
  </select>
  </div>

  <div>
  <button id="submit" className="contacts button" > Submit</button>
  </div>
    </form>
            


    </section>
    </section>
    </div>
    
}
export default Tracks;
