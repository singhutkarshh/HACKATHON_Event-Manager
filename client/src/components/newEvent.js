import React from "react";
import axios from "axios";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
const NewEvent = ({ setAddPop, updateAction }) => {
  const classes = useStyles();
  const [postData, setPostData] = React.useState({
    eventdata: "",
    startDate: "",
    endDate: "",
    organiser: "",
    isRegistered: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://protected-basin-58955.herokuapp.com/api/note", postData)
      .then(() => {
        setAddPop(false);
      })
      .catch((error) => console.log(error));

    updateAction();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40rem",
      }}
    >
      <div style={{ width: "25rem", height: "25rem" }}>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5" style={{}}>
              Add a New Event
            </Typography>
            <TextField
              name="eventdata"
              variant="outlined"
              label="Event"
              fullWidth
              value={postData.eventdata}
              onChange={(e) => {
                setPostData({ ...postData, eventdata: e.target.value });
              }}
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            ></TextField>
            <TextField
              name="startDate"
              variant="outlined"
              label="Start date"
              fullWidth
              value={postData.startDate}
              onChange={(e) => {
                setPostData({ ...postData, startDate: e.target.value });
              }}
              style={{ marginBottom: "1rem" }}
            ></TextField>
            <TextField
              name="endDate"
              variant="outlined"
              label="End date"
              fullWidth
              value={postData.endDate}
              onChange={(e) => {
                setPostData({ ...postData, endDate: e.target.value });
              }}
              style={{ marginBottom: "1rem" }}
            ></TextField>
            <TextField
              name="organiser"
              variant="outlined"
              label="organiser"
              fullWidth
              value={postData.organiser}
              onChange={(e) => {
                setPostData({ ...postData, organiser: e.target.value });
              }}
              style={{ marginBottom: "1rem" }}
            ></TextField>

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default NewEvent;
