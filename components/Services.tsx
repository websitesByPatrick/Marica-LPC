import React from "react";
import List from "./List";
import HomeCard from "./Cards/HomeCard";

const Services = () => {
  return (
    <HomeCard
      content={{
        heading: `Professional Counseling Services`,
        image: `/services.png`,
        detail: 
          <List
            content={[
              {
                heading: `Mental Health Support`,
                detail: `Helps clients manage anxiety, depression, stress, trauma, and other emotional concerns.`,
              },
              {
                heading: `Therapeutic Approaches`,
                detail: `Utilizes evidence-based methods such as Cognitive Behavioral Therapy (CBT), Mindfulness, and Person-Centered Therapy tailored to individual needs.`,
              },
              {
                heading: `Confidential Environment`,
                detail: `Provides a safe, non-judgmental space for clients to explore their thoughts and feelings.`,
              },
              {
                heading: `Customized Treatment Plans`,
                detail: `Develops personalized strategies to help clients achieve their mental health goals.`,
              },
              {
                heading: `Ongoing Support and Guidance`,
                detail: `Offers continuous care and resources to support clients' mental wellness journey.`,
              },
            ]}
          />
        ,
      }}
    />
  );
};

export default Services;
