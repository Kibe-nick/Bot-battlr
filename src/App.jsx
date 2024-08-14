// src/App.jsx
import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        releaseFromArmy(bot);
      })
      .catch((error) => console.error('Error discharging bot:', error));
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <BotCollection onAddToArmy={addToArmy} />
      <YourBotArmy 
        army={army} 
        onReleaseFromArmy={releaseFromArmy} 
        onDischarge={dischargeBot} 
      />
    </div>
  );
};

export default App;
