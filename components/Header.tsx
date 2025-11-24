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
  div: `bg-slate-950 border border-indigo-950 flex flex-col justify-center items-center py-9 pr-15 mt-10`,

}