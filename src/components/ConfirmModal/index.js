import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ConfirmModal = (props) => {
  const { show, onConfirm, onCancel, title, message } = props;

  return (
    <Dialog open={show} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{"Cancel"}</Button>
        <Button onClick={onConfirm}>{"Confirm"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
