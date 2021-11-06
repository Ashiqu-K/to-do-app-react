import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styles from "./index.scss";

const inputProps = {
  maxLength: 150,
};

const ToDoInputForm = (props) => {
  const { errorMessage, value, onChange, label, onCancel, onSubmit, isEdit } = props;

  return (
    <>
      <TextField
        required
        multiline
        minRows={3}
        maxRows={6}
        mb={2}
        className={styles.textField}
        label={label}
        inputProps={inputProps}
        error={!!errorMessage}
        helperText={errorMessage}
        value={value}
        onChange={onChange}
      />
      <div className={styles.buttonContainer}>
        <Button
          variant="outlined"
          color="primary"
          onClick={onCancel}
          sx={{ m: 1 }}
        >
          {"CANCEL"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          sx={{ m: 1 }}
        >
          {isEdit ? "UPDATE" : "CREATE"}
        </Button>
      </div>
    </>
  );
};

export default ToDoInputForm;
