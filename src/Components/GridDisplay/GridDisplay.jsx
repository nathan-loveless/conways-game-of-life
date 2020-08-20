import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { sharedStyles } from "../../material-ui/styles/sharedStyles";

const borderStyles = {
  border: "1px solid green"
};

//<StyledGridItem border={border}></StyledGridItem>

const GridDisplay = () => {
  const [gridSize, setGridSize] = useState(25);
  // const [minWidth, setMinWidth] = useState("4%");
  // const [minHeight, setMinHeight] = useState("4%");
  const [border, setBorder] = useState(borderStyles);
  const classes = sharedStyles();

  return (
    <div className={classes.gridDiv}>
      <Grid container spacing={1} zeroMnWidth className={classes.gridContainer}>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          className={classes.gridItem}
          style={border}
        ></Grid>
      </Grid>
    </div>
  );
};

export default GridDisplay;
