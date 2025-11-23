import Image from "next/image";
import React, { JSX } from "react";
interface HomeCardProps {
  content: {
    heading: string;
    detail: string | JSX.Element;
    image: string;
  };
  reversed?: boolean;
}

const HomeCard = ({ content, reversed }: HomeCardProps) => {
  return (
    <div className={`card ${reversed ? "flex-row-reverse" : "flex-row"}`}>
        
      <div className="cardTextSection">
        <h2 className="cardHeading">{content.heading}</h2>
        <p className="cardDetail">{content.detail}</p>
      </div>

      <div className="cardImageSection">
        <Image
          className="cardImage"
          src={content.image}
          alt={content.heading}
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HomeCard;
