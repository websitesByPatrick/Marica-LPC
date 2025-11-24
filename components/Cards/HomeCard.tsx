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
    <div className={`${styles.card} ${reversed ? "flex-row-reverse" : "flex-row"}`}>
      <div className={styles.cardTextSection}>
        <h2 className={styles.cardHeading}>{content.heading}</h2>
        <p className={styles.cardDetail}>{content.detail}</p>
      </div>

      <div className={styles.cardImageSection}>
        <Image
          className={styles.cardImage}
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

const styles = {
  card: "h-fit min-h-[625px] w-full flex justify-center items-center my-5 rounded-2xl  bg-black whitespace-pre-line",
  cardTextSection:
    "w-6/12 min-h-[625px] flex flex-col justify-center items-center bg-black/5 rounded-2xl m-5 shadow-2xl shadow-indigo-950  border border-indigo-950",
  cardImageSection: "relative w-6/12 min-h-[625px] flex justify-center items-center",
  cardImage: "rounded-4xl min-h-[625px]",
  cardHeading: "text-xl text-center text-indigo-200 py-5 italic font-bold",
  cardDetail: "text-lg text-justify px-10 text-indigo-200 leading-8 pb-10",
};
