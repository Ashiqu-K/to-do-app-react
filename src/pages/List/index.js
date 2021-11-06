import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import * as actions from "../../redux/ToDo/actions";
import ToDoItem from "../../components/ToDoItem";
import styles from "./index.scss";

const ToDoList = (props) => {
  console.log("props", props);
  const history = useHistory();

  const handleMarkItem = (task) => {
    const data = {
      ...task,
      isCompleted: !task.isCompleted,
    };
    props.markItem(data);
  };

  const handleDelete = (id) => {
    props.deleteItem(id);
  };

  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Typography variant="h4" component="h4" align="center" mb={2}>
          {"TASK LIST"}
        </Typography>
        {!props.toDos.length && (
          <>
            <Divider />
            <Typography variant="h6" align="center" mt={2} mb={2}>
              {"No tasks added. Create a new task."}
            </Typography>
          </>
        )}
        {props.toDos.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleMarkItem={handleMarkItem}
          />
        ))}
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toDos: state.toDo.toDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(actions.deleteToDoItem(id)),
    markItem: (data) => dispatch(actions.markToDoItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
