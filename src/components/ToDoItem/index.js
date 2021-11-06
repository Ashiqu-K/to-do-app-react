import React from "react";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

import styles from "./index.scss";

const ToDoItem = (props) => {
  const { task, handleMarkItem, handleDelete, handleEdit } = props;

  return (
    <>
      <Divider />
      <div className={styles.todoItemWrapper}>
        <Tooltip
          title={task.isCompleted ? "Undo" : "Mark as complete"}
          placement="left"
        >
          <Checkbox
            checked={task.isCompleted}
            onClick={() => handleMarkItem(task)}
            color={task.isCompleted ? "success" : "primary"}
          />
        </Tooltip>
        <Typography
          variant="h6"
          align="left"
          className={
            task.isCompleted ? styles.messageDone : styles.messageDefault
          }
        >
          {task.message}
        </Typography>
        <IconButton
          className={styles.iconButtons}
          aria-label="Edit"
          onClick={() => handleEdit(task.id)}
          edge="end"
          color="info"
          disabled={task.isCompleted}
        >
          <EditIcon />
        </IconButton>
        <Tooltip title="Delete task" placement="right">
          <IconButton
            className={styles.iconButtons}
            aria-label="delete"
            onClick={() => handleDelete(task.id)}
            edge="end"
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default ToDoItem;
