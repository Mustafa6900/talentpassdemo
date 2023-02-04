import './App.css';
import React, { useState } from 'react';
import skills from './components/skills.json';
function App() {

  const [isActive, setActive] = useState(false);
  

  const [isActiveArray, setIsActiveArray] = useState(Array(skills.length).fill(false));

  const handleClick = (id) => {
  const newIsActiveArray = [...isActiveArray];
  newIsActiveArray[id] = !newIsActiveArray[id];
  setIsActiveArray(newIsActiveArray);
};


  return (
    <div className="App">
      <header className="header">
        <img src="logo.png" alt="logo" />
      </header>
      <div className='header-down'>
      </div>
      <div className='page'>
        <div className='page-left'>
          <br />
          <header className='page-left-header'>
            <p>My Skills</p>
          </header>
          <br />
          <div className='page-left-content'>
              {skills.map((skill,id) => (
                <li key={skill.id} onClick={() => setActive(id) 
                }
                style={{
                  background: isActive === id ? "green" : '' ,        
                }}
                
                >
                  <img src={skill.image} alt="skill-image" />
                  <div>{skill.title}</div>
                  <div>{skill.description}</div>
                  </li>
                 )
              )}
          </div>
        </div>
        <div className='page-right'>
        </div>
      </div>
    </div>
  );
}

export default App;
