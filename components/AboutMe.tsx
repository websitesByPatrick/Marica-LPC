import React from "react";
import HomeCard from "./Cards/HomeCard";

export default function AboutMe() {
  return (
    <HomeCard
      content={{
        heading: `About Me`,
        detail: `Marica Nicholas, Counselor Welcome! I'm Marica Nicholas, a dedicated counselor passionate about helping individuals navigate life’s challenges and discover their inner strengths. With years of experience in providing compassionate support, I specialize in creating a safe, non-judgmental space where clients feel heard, understood, and empowered. My approach is rooted in empathy, active listening, and evidence-based techniques tailored to meet each person’s unique needs. Whether you're facing personal struggles, relationship issues, or seeking personal growth, I’m here to guide you through your journey with warmth and professionalism. I believe that everyone has the potential for growth and change. My goal is to walk alongside you, offering insights and tools that foster resilience and well-being. Together, we can work towards building a more fulfilling and balanced life. Thank you for considering me as part of your support system. I look forward to the opportunity to help you thrive.`,
        image: "/maricaDark2.png",
      }}
    />
  );
}
  