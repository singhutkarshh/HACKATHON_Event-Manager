import React from "react";
import Navbar from "../components/Navbar";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import About from "../components/about.js";
import Events from "../components/Events";
import styled from "styled-components";

const Dashboard = () => {
  const { isloading } = React.useContext(GithubContext);

  const [regaction, setRegAction] = React.useState(false);
  const [delaction, setDelAction] = React.useState(false);
  const [updaction, setUpdAction] = React.useState(false);

  const registerAction = () => {
    setRegAction(true);
    setTimeout(() => {
      setRegAction(false);
    }, 2000);
  };

  const deleteAction = () => {
    setDelAction(true);
    setTimeout(() => {
      setDelAction(false);
    }, 2000);
  };
  const updateAction = () => {
    setUpdAction(true);
    setTimeout(() => {
      setUpdAction(false);
    }, 2000);
  };
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
      <Wrapper>
        <Navbar />

        {regaction ? (
          <div className="notifyReg">
            Registration Successful , Check details{" "}
          </div>
        ) : (
          <></>
        )}
        {delaction ? (
          <div className="notifyDel">Deleted Successfully...!</div>
        ) : (
          <></>
        )}
        {updaction ? (
          <div className="notifyUpdate">Event Added Successfully...!</div>
        ) : (
          <></>
        )}

        <Events
          registerAction={registerAction}
          deleteAction={deleteAction}
          updateAction={updateAction}
        />
        {/* <About /> */}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  z-index: 10;
  .notifyDel {
    z-index: 100;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    padding-left: 3rem;
    background-color: red;
  }
  .notifyReg {
    z-index: 100;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    padding-left: 3rem;
    background-color: green;
  }
  .notifyUpdate {
    z-index: 100;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    padding-left: 3rem;
    background-color: blue;
  }
`;

export default Dashboard;
