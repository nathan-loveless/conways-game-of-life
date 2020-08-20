import React from "react";
import Grid from "@material-ui/core/Grid";
import 

const GridDisplay = () => {
  return (
    <div className={classes.gridDiv}>
      <Grid container spacing={1} className="GridContainer">
        <Grid item xs={12} className="gridItem"></Grid>
      </Grid>
    </div>
  );
};

export default GridDisplay;
