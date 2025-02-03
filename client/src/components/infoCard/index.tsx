import React, { useState } from "react";
import "./InfoCard.css";

interface InfoCardProps {
  title: string;
  subtitle: string;
  content: string;
  imagePath: string;
  backContent: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  content,
  imagePath,
  backContent,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`infoCard ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="infoCardInner">
        <div className="infoCardFront">
          <h2 id="title">{title}</h2>
          <img id="image" src={imagePath} alt={title} />
          <h3 id="subtitle">{subtitle}</h3>
          <p id="text">{content}</p>
          <p className="showMore">Click for more ...</p>
        </div>
        <div className="infoCardBack">
          <p id="text">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
