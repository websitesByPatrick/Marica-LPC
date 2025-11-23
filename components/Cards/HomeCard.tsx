import Image from "next/image";

interface HomeCardProps {
content: {
  heading: string;
  detail: string;
  image: string;
}
}

const HomeCard = ({ content }: HomeCardProps) => {
  return (
    <div className="card">
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
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HomeCard;
