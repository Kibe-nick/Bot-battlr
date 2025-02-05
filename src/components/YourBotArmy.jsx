import React from 'react';

const YourBotArmy = ({ army, onReleaseFromArmy, onDischarge }) => {
  return (
    <div className="your-bot-army">
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => onReleaseFromArmy(bot)}>Release from Army</button>
          <button onClick={() => onDischarge(bot)} style={{ color: 'red' }}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
