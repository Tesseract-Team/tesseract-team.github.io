import React from "react";
import "./App.css";

import logo from "./assets/logo.png";
import games from "./data/games";

export default function App() {
  const highlightedGames = games.slice(0, 3);
  const otherGames = games.slice(3);

  return (
    <div className="app">
      <header className="banner">
        <img src={logo} alt="Tesseract Team Logo" className="logo" />
      </header>

      <section className="highlighted-section">
        <h2 className="section-title">Highlighted Games</h2>
        <div className="highlighted-grid">
          {highlightedGames.map((game, index) => (
            <a
              key={index}
              href={game.link}
              className="game-card large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={game.image} alt={game.title} className="game-image" />
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                {/* <p className="game-desc">Learn More</p> */}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">All Games</h2>
        <div className="grid">
          {otherGames.map((game, index) => (
            <a
              key={index}
              href={game.link}
              className="game-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={game.image} alt={game.title} className="game-image" />
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
