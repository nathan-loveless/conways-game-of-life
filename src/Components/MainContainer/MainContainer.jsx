import React from "react";
import GridDisplay from "../GridDisplay/GridDisplay";
import { sharedStyles } from "../../material-ui/styles/sharedStyles";

const MainContainer = () => {
  const classes = sharedStyles();

  return (
    <div className={classes.root}>
      <GridDisplay />
    </div>
  );
};

export default MainContainer;
