import { Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Cards = ({ registerAction, deleteAction }) => {
  return (
    <Wrapper>
      <Paper>
        <div className="cardsi">
          <h4>Event : coding contest</h4>
          <p>Start : something</p>
          <p>End : something</p>
          <div className="btnCon">
            <button className="btn" onClick={registerAction}>
              Register
            </button>
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
  .btnCon {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 40px;
  }
`;
export default Cards;
