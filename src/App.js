import React from 'react';
import './App.css';
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import {GameStart} from './Game/GameStart';


const StyledTitle = styled(Typography)`
  color: #eaeaea;
`;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
  },
}))(Button);


function App() {

  const classes = useStyles();


  return (
    <div>
      <StyledTitle variant={"h2"}>
        Welcome to SRE's simulation game.
      </StyledTitle>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        Custom CSS
      </ColorButton>
      <ColorButton>
        Start a new game
      </ColorButton>
      <Button onClick={GameStart("new")}>TEST</Button>
    </div>
  );
}

export default App;
