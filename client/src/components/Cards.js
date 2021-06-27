import { Paper } from "@material-ui/core";
import axios from "axios";
import React from "react";
import styled from "styled-components";

const Cards = ({
  registerAction,
  deleteAction,
  data,
  setChanged,
  changed,
  setChanged1,
  changed1,
  setToggle,
  setDetails,
}) => {
  const { endDate, eventdata, isRegistered, organiser, startDate, _id } = data;

  const registerHandler = async (key) => {
    await axios.put(
      `https://protected-basin-58955.herokuapp.com/api/note/update`,
      key
    );
    registerAction();
    setChanged1(!changed1);
  };
  const registerHandler1 = async (key) => {
    await axios.put(
      `https://protected-basin-58955.herokuapp.com/api/note/update`,
      key
    );
    setChanged1(!changed1);
  };
  const deleteHandler = async (key) => {
    await axios.delete(
      `https://protected-basin-58955.herokuapp.com/api/note/${key}`
    );
    console.log(key);
    setChanged(!changed);
    deleteAction();
  };

  const detailHandler = (key) => {
    setToggle(true);
    setDetails(key);
  };

  return (
    <Wrapper>
      <Paper>
        <div className="cardsi" key={_id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>{eventdata}</h4>
            <button
              onClick={() =>
                detailHandler({
                  _id,
                  eventdata,
                  startDate,
                  endDate,
                  organiser,
                  isRegistered,
                })
              }
              style={{
                padding: "6px 10px",
                color: "black",
                backgroundColor: "white",
              }}
            >
              Details
            </button>
          </div>
          <p>Start date : {startDate}</p>
          <p>End date : {endDate}</p>
          <div className="btnCon">
            {isRegistered ? (
              <button
                className="bt2"
                onClick={() =>
                  registerHandler1({
                    _id,
                    eventdata,
                    startDate,
                    endDate,
                    organiser,
                    isRegistered,
                  })
                }
              >
                Registered
              </button>
            ) : (
              <button
                className="btn"
                onClick={() =>
                  registerHandler({
                    _id,
                    eventdata,
                    startDate,
                    endDate,
                    organiser,
                    isRegistered,
                  })
                }
              >
                Register
              </button>
            )}
            <button className="btn btn1" onClick={(e) => deleteHandler(_id)}>
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
