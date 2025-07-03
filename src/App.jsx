import React from "react";
import "./App.css";

import banner from "./assets/banner.png";
import games from "./data/games";

export default function App() {
  const highlightedGames = games.slice(0, 3);
  const otherGames = games.slice(3);

  return (
    <div className="app">
      <header className="banner">
        <img src={banner} alt="Tesseract Team Banner" className="banner" />
      </header>

      <section className="highlighted-section">
        <h2 className="section-title">Highlighted Games</h2>
        <div className="game-grid highlighted-grid">
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
                <p className="game-desc">{game.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Other Games</h2>
        <div className="game-grid grid">
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
                <p className="game-desc">{game.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
