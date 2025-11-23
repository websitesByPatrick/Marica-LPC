import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.div}>
      <Navbar />
    </div>
  );
};

export default Header;

const styles = {
  div: `from-slate-800 to-slate-950 bg-linear-330 border-b border-white  text-slate-100 flex flex-col justify-center items-center py-9 pr-15`,
  h1: `text-3xl`,
  h2: `text-lg mt-2 mb-6`,
}