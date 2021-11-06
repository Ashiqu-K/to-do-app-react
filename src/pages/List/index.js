import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import * as actions from "../../redux/ToDo/actions";
import ToDoItem from "../../components/ToDoItem";
import ConfirmModal from "../../components/ConfirmModal";

import styles from "./index.scss";

const ToDoList = (props) => {
  console.log("props", props);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);

  const history = useHistory();

  const handleMarkItem = (task) => {
    const data = {
      ...task,
      isCompleted: !task.isCompleted,
    };
    props.markItem(data);
  };

  const onEditClick = (id) => {
    history.push(`/edit/${id}`);
  };

  const onDeleteClick = (id) => {
    setShowDeleteConfirmation(true);
    setDeleteTaskId(id);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setDeleteTaskId(null);
  };

  const handleConfirmDelete = () => {
    if (deleteTaskId) {
      props.deleteItem(deleteTaskId);
      setDeleteTaskId(null);
    }
    setShowDeleteConfirmation(false);
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
            <Typography variant="h6" align="center" sx={{ mb: 2, mt: 2 }}>
              {"No tasks added. Create a "}
              <Link to="/create">{"new task."}</Link>
            </Typography>
          </>
        )}
        {props.toDos.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            handleEdit={onEditClick}
            handleDelete={onDeleteClick}
            handleMarkItem={handleMarkItem}
          />
        ))}
      </Card>
      <ConfirmModal
        show={showDeleteConfirmation}
        title={"Confirm Delete"}
        message={"Are you sure you want to delete this task?"}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
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
