import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import NewEvent from "./newEvent";
const Events = ({ registerAction, deleteAction }) => {
  const [addpop, setAddPop] = React.useState(false);

  const addEventHandler = () => {
    setAddPop(true);
  };
  React.useEffect(() => {}, [addpop]);

  return (
    <>
      {" "}
      {addpop ? (
        <NewEvent setAddPop={setAddPop} />
      ) : (
        <Wrapper>
          <div className="header">
            <h1 className="heading">Upcoming Events</h1>
            <button
              className="btn"
              style={{ backgroundColor: "blue" }}
              onClick={addEventHandler}
            >
              Add new event
            </button>
          </div>
          <div className="eventBroadcast">
            <h4>Latest Upcoming : bla bla bla ....</h4>
          </div>
          <span className="eventCards">
            <Cards
              registerAction={registerAction}
              deleteAction={deleteAction}
            />
            <Cards
              registerAction={registerAction}
              deleteAction={deleteAction}
            />
            <Cards
              registerAction={registerAction}
              deleteAction={deleteAction}
            />
            <Cards
              registerAction={registerAction}
              deleteAction={deleteAction}
            />
            <Cards
              registerAction={registerAction}
              deleteAction={deleteAction}
            />
            <Cards
              registerAction={registerAction}
              deleteAction={deleteAction}
            />
            <Cards
              registerAction={registerAction}
              deleteAction={deleteAction}
            />
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
