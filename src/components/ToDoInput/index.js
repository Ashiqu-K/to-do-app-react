import React from "react";

import TextField from "@mui/material/TextField";

import styles from "./index.scss";

const inputProps = {
  maxLength: 150,
};

const ToDoInput = (props) => {
  const { errorMessage, value, onChange, label } = props;

  return (
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
  );
};

export default ToDoInput;
