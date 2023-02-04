import './App.css';
import React, { useState } from 'react';
import skills from './components/skills.json';
import leaderboard from './components/leaderboard.json';
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, RadialLinearScale  } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, RadialLinearScale);

function App() {

  const [isActive, setActive] = useState([]);
  
  console.log(isActive)
 
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
      data: [isActive[0], 0, 0, 0, 0, 0],
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
     
      <header className="header">
        <img src="logo.png" alt="logo" />
      </header>
      <div className='header-down'>
      </div>
      <br />
      <div className='page'>
        <div className='page-left'>
          <br />
          <header className='page-left-header'>
            <p>All Skills</p>
          </header>
          <br />
          <div className='page-left-content'>
              
              {skills.map((skill, id) => (
  <li key={skill.id} onClick={() => {handleClick(id);}
  }
    style={{
      background: isActiveArray[id] ? "green" : '',
    }}
  >
    
    <img src={skill.image} alt="skill-image" />
    <div>{skill.title}</div>
    <div>{skill.description}</div>
  </li>
))}
          </div>
        </div>
        <div className='page-right'>
          <br />
          <div className='page-right-header'>
            <p>My Skills</p>
            </div>
            <br />
            <div className='page-right-content'>
              {isActive.map((skill,id) => (
                <li key={id}>
                  <div>{skill.title}</div>
                  </li>
                  )
              )}
        </div>
        <div className='page-right-radar'>
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
                <div>Name : {leaderboard.name}</div>
                <div>Point: {leaderboard.point}</div>
              </li>
            ))}
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
