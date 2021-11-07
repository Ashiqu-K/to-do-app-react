import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ListAltIcon from '@mui/icons-material/ListAlt';

import styles from "./index.scss";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const handleCreateClick = () => {
    history.push("/create");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ListAltIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {"TO-DO APP"}
            </Typography>
            {location.pathname === "/list" && (
              <>
                <Button
                  className={styles.createButtonDesktop}
                  variant="outlined"
                  color="inherit"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={handleCreateClick}
                >
                  {"CREATE TASK"}
                </Button>
                <IconButton
                  className={styles.createButton}
                  aria-label="add"
                  onClick={handleCreateClick}
                  color="primary"
                  size="large"
                >
                  <AddOutlinedIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
