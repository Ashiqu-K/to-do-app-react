import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import * as actions from "../../redux/ToDo/actions";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ToDoInputForm from "../../components/ToDoInputForm";
import styles from "./index.scss";

const inputProps = {
  maxLength: 150,
};

const ToDoCreate = (props) => {
  const [toDoMessage, setToDoMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidTaskId, setInvalidTaskId] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const tasks = [...props.toDos];
      const editData = tasks.find((task) => task.id === Number(id));

      if (editData) {
        setToDoMessage(editData.message);
      } else {
        setInvalidTaskId(true);
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
        id: Number(id),
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
          {invalidTaskId ? (
            <>
              <Divider />
              <Typography variant="h6" align="center" sx={{ mb: 2, mt: 2 }}>
                {"Task could not be found for the given Id. Return to the "}
                <Link to="/">{"Home Page."}</Link>
              </Typography>
            </>
          ) : (
            <ToDoInputForm
              label="Enter task"
              isEdit={!!id}
              errorMessage={errorMessage}
              value={toDoMessage}
              onChange={handleOnChange}
              onCancel={handleCancel}
              onSubmit={handleSubmit}
            />
          )}
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
