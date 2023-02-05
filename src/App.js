import './App.css';
import React, { useState } from 'react';
import skills from './components/skills.json';
import leaderboard from './components/leaderboard.json';
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, RadialLinearScale  } from 'chart.js';


ChartJS.register(LineController, LineElement, PointElement, LinearScale, RadialLinearScale);

function App() {

  const [isActive, setActive] = useState([]);
  
 
  const [isActiveArray, setIsActiveArray] = useState(Array(skills.length).fill(false));

  const handleClick = (id) => {
  const newIsActiveArray = [...isActiveArray];
  newIsActiveArray[id] = !newIsActiveArray[id];
  setIsActiveArray(newIsActiveArray);
 
  
  if (newIsActiveArray[id]) {
    setActive([...isActive, skills[id]]);
    } else {
    setActive(isActive.filter((skill) => skill.id !== skills[id].id));
    }
  
};



const data = {
  labels: [
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6"],
  datasets: [
    {
      label: "My Skills",
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(209, 113, 23, 0.2)",
      borderColor: "rgba(209, 113, 23)",
      borderWidth: 1,
    },],
};

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
};


data.datasets[0].data = isActive.map(skill => skill.radarpoint);
    
  return (
    <div className="App">
       <div className='page'>
      <br />
      <header className="header">
        <img src="logo.png" alt="logo" /> <div className='pp'> <img src="pp.png" alt="pp" /> </div>
      </header>
      <br />  
      <div className='header-down'>
      </div>
      <br />
     
        <div className='page-left'>
          <br />
          <header className='page-left-header'>
            <p>Self Check-Up</p>
          </header>
          <br />
          <br />
          <br />
          <br />
          <div className='page-left-content'>
              {skills.map((skill, id) => ( 
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  
                  <div  className='point' style={{background: isActiveArray[id] ? 'green' : ''}}>    {id < skills.length - 1 && <div className="vertical-bar"  style={{background: isActiveArray[id] ? 'green' : ''}}></div>}</div>
                 
                 <li classname="content-li" key={skill.id} onClick={() => {handleClick(id);}}>    
                  <img src={skill.image} alt="skill-image" /> 
                  <div className='content-title'> {skill.title} <p>{isActiveArray[id] ? 'Completed' : 'Start Now'}</p></div>
                  <br />
                  <div className='description'>{skill.description} </div>
                  </li>
                  </div>))}
                  
          </div>
        </div>
        <div className='page-right'>
          <br />
          <div className='page-right-header'>
            <div className='skill1'><img src="sk1.png" alt="skill1" /> <h1>15/20</h1> <p>Assessements</p></div>
            <div className='skill2'><img src="sk2.png" alt="skill1" /> <h1>3</h1> <p>Badges</p></div>
            <div className='skill3'><img src="sk3.png" alt="skill1" /> <h1>4</h1> <p>Challenges</p></div> 
            </div>
            <br />
            <br />
        <div className='page-right-radar'>
          <h1>Skill Radar</h1>
        <Radar data={data} options={options} />
        </div>
        <div className='page-right-leaderboard'>
          <br />
          <div className='page-right-leaderboard-header'>
            <p>Leaderboard</p>
          </div>
          <br />
          <div className='page-right-leaderboard-content'>
            {leaderboard.map((leaderboard) => (
              <li key={leaderboard.id}>
                <h3>{leaderboard.id}  <img src={leaderboard.id === 1 ? "kp1.png" : leaderboard.id === 2 ? "kp2.png" :  leaderboard.id === 3 ? "kp3.png": "kp4.png"}/></h3>
                <img src={leaderboard.pp} alt="leaderboard-image" />
                <div className='leaderboard-title'> {leaderboard.name} <p>{leaderboard.job} </p></div>
                 
              </li>
            ))}
            </div>
        </div>
      </div>
     
   
    <br />
    <br />
    </div> 
    <div className='header-down'>
      </div >
      <div className='page-info'>
        <div className='page-info-logo'>
          <img src="logo.png" alt="logo" />
          <p>TalentPass is the ultimate gateway to unlocking your true potential and realizing your dreams for a brighter future.</p>
        </div>
        <div className='page-info-main'>
          <h1>Main</h1>
          <p>Home</p>
          <p>My Talent Passport</p>
        </div>
        <div className='page-info-legal'>
          <h1>Legal</h1>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className='page-info-contact'> 
       
          <h1>Useful Links</h1>
            <p>Twitter</p> 
            <p>facebook</p>
            <p>Instagram</p>
            <p>linkedin</p>
            
        </div>
        
      </div>
      <div className='header-down'>
      </div >
       <p className='design-info'>© 2023 by TalentPass.</p>
      </div> 
  );
}

export default App;
