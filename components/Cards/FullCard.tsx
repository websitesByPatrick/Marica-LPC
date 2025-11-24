import React from "react";

interface FullCardProps {
  header?: string;
  detail?: string;
}

const FullCard = ({header, detail}:FullCardProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{header}</h2>
      <p className={styles.p}>
        {detail}
      </p>
    </div>
  );
};

export default FullCard;

const styles = {
    container: "w-full bg-black rounded-lg p-6 shadow-md border border-indigo-900 shadow-indigo-900 mb-8",
    h2: "text-2xl font-bold mb-4 text-indigo-200",
    p: "text-indigo-200",
}