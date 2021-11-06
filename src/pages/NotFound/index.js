import React from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import styles from "./index.scss";

const NotFoundPage = () => (
  <div className={styles.container}>
    <Card className={styles.card}>
      <SentimentVeryDissatisfiedIcon fontSize="large" />
      <Typography variant="h4" component="h4" align="center" mt={2}>
        {"404 - Not Found!"}
      </Typography>
      <Divider />
      <Typography variant="h6" align="center" sx={{ mb: 2, mt: 2 }}>
        {
          "Perhaps the page you're looking for has been removed, or you've entered the incorrect URL."
        }
      </Typography>
      <Link className={styles.linkToHome} to="/">
        {"Go Home"}
      </Link>
    </Card>
  </div>
);

export default NotFoundPage;
