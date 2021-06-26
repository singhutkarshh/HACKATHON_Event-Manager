import React from "react";
import styled from "styled-components";

const Events = () => {
  return (
    <Wrapper>
      <div className="header">
        <h1 className="heading">Upcoming Events</h1>
        <button className="headBtn">Add new event</button>
      </div>
      <div className="eventBroadcast">
        <h4>Latest Upcoming : bla bla bla ....</h4>
      </div>
      <div className="eventCards"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
  }

  .heading {
    font-size: 30px;
  }

  .headBtn {
    font-size: 25px;
    padding: 4px 8px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
  }
  .eventBroadcast {
    margin-top: 2rem;
    height: 4rem;
    width: 100%;
    border: 2px solid black;
    display: flex;
    align-items: center;
    padding: 0 5px;
    font-weight: 500;
  }
  .eventBroadcast > h4 {
    font-size: 26px;
    animation: anime 20s infinite;
  }

  .eventCards {
    width: 100%;
    display: flex;
    padding: 20px;
  }

  . @keyframes anime {
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(70rem, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;

export default Events;
