import React from "react";
import "./App.css";

// Import your images (place them in src/assets/)
import logo from "./assets/logo.png";
import starseeker from "./assets/starseeker.png";
import bubbles from "./assets/pesky_bubbles.png";
import bucket from "./assets/bucket_of_orders.png";
import hive from "./assets/hive.png";
import camps from "./assets/mines_and_camps.png";
import crawler from "./assets/tomb_crawler.png";

const games = [
  {
    title: "Starseeker",
    image: starseeker,
    link: "https://tesseract-team.itch.io/starseeker",
  },
  {
    title: "Pesky Bubbles!!",
    image: bubbles,
    link: "https://tesseract-team.itch.io/pesky-bubbles",
  },
  {
    title: "Bucket of Orders",
    image: bucket,
    link: "https://tesseract-team.itch.io/bucket-of-orders",
  },
  {
    title: "HIVE",
    image: hive,
    link: "https://tesseract-team.itch.io/hive",
  },
  {
    title: "Mines and Camps",
    image: camps,
    link: "https://tesseract-team.itch.io/mines-and-camps",
  },
  {
    title: "Tomb Crawler",
    image: crawler,
    link: "https://tesseract-team.itch.io/tomb-crawler",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="banner">
        <img src={logo} alt="Tesseract Team Logo" className="logo" />
      </header>

      <main className="grid">
        {games.map((game, index) => (
          <a
            key={index}
            href={game.link}
            className="game-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={game.image} alt={game.title} className="game-image" />
            <h2 className="game-title">{game.title}</h2>
          </a>
        ))}
      </main>
    </div>
  );
}
