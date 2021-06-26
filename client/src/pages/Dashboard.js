import React from "react";
import Navbar from "../components/Navbar";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import About from "../components/about.js";
import Events from "../components/Events";

const Dashboard = () => {
  const { isloading } = React.useContext(GithubContext);
  if (isloading) {
    return (
      <main>
        <Navbar />
        <img src={loadingImage} className="loading-img" alt=""></img>
        <About flag="" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Events />
      {/* <About /> */}
    </main>
  );
};
export default Dashboard;
