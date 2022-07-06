/* eslint-disable react/button-has-type */
import React, { useRef, forwardRef, useCallback, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import AppLayout from "./appLayout";

import { AboutmeLayout } from "../style/layout";

import OutlinedCard from "./aboutPaper";

function AboutMe(props) {
  const [Toggle, setToggle] = useState(false);
  const [OnMouse, setOnMouse] = useState(0);
  const [aboutpage, setaboutpage] = useState([false, false, false]);
  const onchange = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const useStyles = makeStyles((theme) => ({
    paper: {
      width: "50%",
      height: "60vh",
      top: "50%",
      left: "50%",
      position: "absolute",
      background: "#fff",
      transform: "translate(-50%, -50%)",
      animation: "scaleX .5s",

      "&:hover": {
        background: "red",
      },
    },
    Container: { height: "100vh", position: "relative" },
    paperOn: {
      margin: 20,
    },
    TypographyOn: {
      fontSize: 55,
    },
    Typography: {
      fontSize: 30,
    },
  }));
  const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
      •
    </Box>
  );
  const classes = useStyles();

  const onMousehandler = (e) => {
    console.log(e);
  };

  return (
    <div id="Aboutme">
      <AboutmeLayout>
        <div className={classes.Container}>
          <Paper elevation={3} className={classes.paper} />
        </div>
      </AboutmeLayout>
    </div>
  );
}

export default AboutMe;
