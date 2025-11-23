import Image from "next/image";
import mentalHealthImage from "../public/mentalHealth1.webp";

const WhatIsMentalHealth = () => {
  return (
    <div className="card">
      <div className="cardTextSection">
        <h2 className="cardHeading">What Is Good Mental Health</h2>
        <p className="cardDetail">
          Mental health refers to a person&apos;s emotional, psychological, and
          social well-being. It affects how individuals think, feel, and behave,
          as well as how they handle stress, relate to others, and make
          decisions. Good mental health helps people cope with life&apos;s
          challenges, maintain relationships, perform daily activities, and
          contribute to their communities. It is influenced by various factors,
          including genetics, life experiences, and family history of mental
          health issues.
        </p>
      </div>

      <div className="cardImageSection">
        <Image
          className="cardImage"
          src={mentalHealthImage}
          alt="What is Mental Health Image"
          fill
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
};

export default WhatIsMentalHealth;
