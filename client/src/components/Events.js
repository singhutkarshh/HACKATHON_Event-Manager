import axios from "axios";
import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import NewEvent from "./newEvent";
const Events = ({ registerAction, deleteAction, updateAction }) => {
  const [addpop, setAddPop] = React.useState(false);
  const [changed, setChanged] = React.useState(false);
  const [changed1, setChanged1] = React.useState(false);
  const [dataArray, setDataArray] = React.useState([]);
  const addEventHandler1 = () => {
    setAddPop(true);
  };

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios("http://localhost:8080/api/note").catch(
        (err) => {
          console.log(err);
        }
      );
      if (response) {
        const { data } = response.data;
        setDataArray(data);
      }
    };
    getData();
  }, [changed, addpop, changed1]);
  console.log(dataArray);
  const upcoming = dataArray[0];
  console.log(upcoming);
  return (
    <>
      {" "}
      {addpop ? (
        <NewEvent setAddPop={setAddPop} updateAction={updateAction} />
      ) : (
        <Wrapper>
          <div className="header">
            <h1 className="heading">Upcoming Events</h1>
            <button
              className="btn"
              style={{ backgroundColor: "blue" }}
              onClick={addEventHandler1}
            >
              Add new event
            </button>
          </div>
          <div className="eventBroadcast">
            <h4>Latest Upcoming : </h4>
          </div>
          <span className="eventCards">
            {dataArray.map((item) => {
              return (
                <Cards
                  data={item}
                  registerAction={registerAction}
                  deleteAction={deleteAction}
                  setChanged={setChanged}
                  changed={changed}
                  setChanged1={setChanged1}
                  changed1={changed1}
                />
              );
            })}
          </span>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;

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
    display: flex;
    align-items: center;
    padding: 0 5px;
    font-weight: 500;
  }
  .sc-gtsrHT {
    width: 26rem;
    height: 15rem;
  }
  .IHpuS {
    width: 26rem;
    height: 15rem;
  }
  .eventBroadcast > h4 {
    font-size: 26px;
    animation: anime 20s infinite;
  }

  .eventCards {
    width: 100rem;
    max-height: 80rem;
    padding: 20px;
    overflow: scroll;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  @keyframes anime {
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
