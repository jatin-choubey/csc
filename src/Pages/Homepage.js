// Inside your HomePage component
import React, { useState, useEffect } from "react";
import "./Homepage.css";

const HomePage = () => {
  const quotes = [
    "Think twice before clicking on unfamiliar links, be mindful of privacy settings on social media, and verify information from reliable sources to navigate the digital landscape with confidence.",
    "Stay vigilant online by regularly updating passwords and being cautious about sharing personal information.",
    "Regularly back up important data to prevent loss due to malware or hardware failure.",
    "Be mindful of the information you share online, as it contributes to your digital footprint.",
    // Add more quotes here
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    // Update the currentQuote index at regular intervals (e.g., every day)
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="ribbon-container">
        <div className="ribbon">
          <p className="quote">{quotes[currentQuote]}</p>
        </div>
      </div>
      <div className="inner">
        <div className="backgroundImage"></div>
        <div className="clickableDivsContainer">
          <div className="clickableDiv">Clickable Div 1</div>
          <div className="clickableDiv">Clickable Div 2</div>
          <div className="clickableDiv">Clickable Div 3</div>
          <div className="clickableDiv">Clickable Div 4</div>
          <div className="clickableDiv">Clickable Div 5</div>
          <div className="clickableDiv">Clickable Div 6</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
