import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as actions from "../../redux/ToDo/actions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import ToDoInput from "../../components/ToDoInput";
import styles from "./index.scss";

const inputProps = {
  maxLength: 150,
};

const ToDoCreate = (props) => {
  const [toDoMessage, setToDoMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const tasks = [...props.toDos];
      const editData = tasks.find((task) => task.id === parseInt(id));

      if (editData) {
        setToDoMessage(editData.message);
      }
    }
  }, []);

  const handleOnChange = (e) => {
    if (errorMessage) {
      // Clear error.
      setErrorMessage("");
    }
    setToDoMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (!toDoMessage) {
      setErrorMessage("Task cannot be empty.");
      return;
    }
    if (id) {
      const data = {
        id: parseInt(id),
        message: toDoMessage,
        isCompleted: false,
      };
      props.updateItem(data);
    } else {
      const data = {
        id: Math.floor(Math.random() * 10000), // hack to generate random ids.
        message: toDoMessage,
        isCompleted: false,
      };
      props.postItem(data);
    }
    history.push("/list");
  };

  const handleCancel = () => {
    history.push("/list");
  };

  return (
    <>
      <div id="main" className={styles.container}>
        <Card className={styles.card}>
          <Typography variant="h4" component="h4" align={"center"} mb={2}>
            {id ? "EDIT TASK" : "CREATE TASK"}
          </Typography>
          <ToDoInput
            label="Enter task"
            errorMessage={errorMessage}
            value={toDoMessage}
            onChange={handleOnChange}
          />
          <div className={styles.buttonContainer}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCancel}
              sx={{ m: 1 }}
            >
              {"CANCEL"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ m: 1 }}
            >
              {id ? "UPDATE" : "CREATE"}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    toDos: state.toDo.toDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postItem: (data) => dispatch(actions.postToDoItem(data)),
    updateItem: (data) => dispatch(actions.updateToDoItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCreate);
