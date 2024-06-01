import "./Events.css";

function Events() {
  return (
    <>
    <div className="body">
    <div className="events">
      <div className="introduction">
        <h1> <i>Explore a world of innovation with our tracks</i></h1>
      <p><i>where creativity meets technology</i></p>
      </div>
      <div className="ourevents1">
        <div className="ourevents2">
          <h1>cybersecurity</h1>
          <img src="../assets/security.png" alt="bridget" />
          <p>Every Monday from 4pm to 7pm at computer lab F04, led by Webster Ifedha.</p>
        </div>
        
        <div className="ourevents2">
          <h1>UI/UX</h1>
          <img src="../assets/ui.png"alt="cybersecurity"/>
          <p>Every Tuesday from 5pm to 8pm at computer lab F04, led by Manase Gunga..</p>         
        </div>

        <div className="ourevents2">
          <h1>Webdevelopment</h1>
          <img src="./assets/web.png"alt="website"/>
          <p>Every Wednesday from 6pm to 9pm at computer lab F04, led by Carolyne Githenduka..</p>
          
        </div>

        <div className="ourevents2">
          <h1>Mobile apps development </h1>
          <img src="../assets/mobile.png"alt="cybersecurity"/>
          <p>Every Thursday from 4pm to 7pm led by Stanley Amunze.</p>
        </div>

        <div className="ourevents2">
          <h1>Cloud engineering</h1>
          <img src="../assets/cloud.png"alt="cybersecurity"/>
          <p>Every Friday from 3pm to 6pm at computer lab F04, led by Paul Karanja.</p>
          
        </div>

        <div className="ourevents2">
          <h1>Power Platform</h1>
          <img src="../assets/power.png"alt="cybersecurity"/>
          <p>Every Saturday from 1pm to 4pm at computer lab F04, led by Evyonn Mbithe.</p>
          
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Events;
