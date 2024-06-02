import "./Testimonies.css";
function Testimonies() {
  return (
    <div className="testimonies">
      <div className="members_say">
        <h1>Testimonials</h1>
      </div>
      <section className="members">
        <div className="vee">
          <h2>Jonathan Kinyanjui</h2><br/>
          
           <p>  " Joining the Murang'a University Tech Club was one of the best
            decisions I've made in my university journey. The hands-on
            experience with the latest technologies and the collaborative
            environment have greatly enhanced my skills and confidence.
          </p>
        </div>
        {/*  */}
        <div className="vee">
          <h2>Hazael Mungai</h2><br/>
          <p>
          "MUTC's UI/UX track has been transformative for me. 
          The workshops and mentorship have honed my design skills and given me the confidence to pursue a career in tech. The collaborative environment here is unparalleled."
          </p>
        </div>
       

        <div className="vee">
          <h2>Prudence Wanjiku</h2><br/>
          "Joining MUTC was one of the best decisions of my college life. 
          The community is incredibly supportive, and I've gained hands-on experience in 
          cybersecurity that has propelled my career forward. I can't thank MUTC enough for the
           opportunities and friendships it has provided."
        </div>
        {/* The End.....*/}
      </section>
    </div>
  );
}

export default Testimonies;
