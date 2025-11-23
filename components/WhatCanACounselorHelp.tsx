
import Image from "next/image";
import therapyImage from "../public/therapySession.png";

const WhatCanACounselorHelp = () => {
  return (
    <div className="card">
      <div className="cardTextSection">
        <h2 className="cardHeading">What Is Good Mental Health</h2>
        <p className="cardDetail">
          A mental health counselor serves as a compassionate guide, helping
          individuals navigate emotional, psychological, and behavioral
          challenges. Their role involves active listening, offering a safe,
          nonjudgmental space for clients to express their feelings and
          thoughts. Counselors assess mental health conditions, develop
          personalized treatment plans, and employ therapeutic techniques like
          cognitive-behavioral therapy or mindfulness strategies to support
          growth and healing. They work with diverse populations, addressing
          issues such as anxiety, depression, trauma, relationship conflicts,
          and stress management. Mental health counselors collaborate with other
          healthcare professionals when needed, ensuring comprehensive care.
          Their ultimate goal is to empower clients, fostering resilience and
          promoting mental well-being, so individuals can lead healthier, more
          fulfilling lives.
        </p>
      </div>

      <div className="cardImageSection">
        <Image
          className="cardImage"
          src={therapyImage}
          alt="What is Mental Health Image"
          fill
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
};
export default WhatCanACounselorHelp;
