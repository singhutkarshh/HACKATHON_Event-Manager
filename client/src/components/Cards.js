import { Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Cards = ({ registerAction, deleteAction, data }) => {
  const { endDate, eventdata, isRegistered, organiser, startDate, id } = data;
  const registerHandler = () => {
    registerAction();
  };
  return (
    <Wrapper>
      <Paper>
        <div className="cardsi" key={id}>
          <h4>{eventdata}</h4>
          <p>{startDate}</p>
          <p>{endDate}</p>
          <div className="btnCon">
            {isRegistered ? (
              <button className="bt2" onClick={registerHandler}>
                Registered
              </button>
            ) : (
              <button className="btn" onClick={registerAction}>
                Register
              </button>
            )}
            <button className="btn btn1" onClick={deleteAction}>
              Delete
            </button>
          </div>
        </div>
      </Paper>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .cardsi {
    width: 25rem;
    height: 13rem;
    padding: 20px;
    margin: 1rem 1rem;
  }
  .cardsi > h4 {
    font-size: 20px;
  }
  .bt2 {
    font-size: 16px;
    padding: 6px 14px;
    background-color: #39a133;
    color: white;
    outline: none;
    border: none;
    border-radius: 5px;
  }
  .bt2:hover {
    background-color: #669c64;
  }
  .btnCon {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 40px;
  }
`;
export default Cards;
