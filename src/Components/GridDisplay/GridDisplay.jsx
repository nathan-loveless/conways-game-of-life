import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { sharedStyles } from "../../material-ui/styles/sharedStyles";
let classNames = require("classnames");

const borderStyles = {
  border: "1px solid green"
};

//<StyledGridItem border={border}></StyledGridItem>

const GridDisplay = props => {
  const [data, setData] = useState([]);
  //const [border, setBorder] = useState(borderStyles);
  const classes = sharedStyles();

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <div className={classes.grid}>
      {data.map((grid, index) => (
        <div
          key={index}
          index={grid.id}
          className={classNames(
            grid.alive ? classes.alive : classes.dead,
            classes.gridItem
          )}
          onClick={props.toggleLife}
        />
      ))}
    </div>
  );
};

export default GridDisplay;
// <div className={classes.gridDiv}>
//    <Grid container spacing={1} zeroMnWidth className={classes.gridContainer}>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//     <Grid
//       item
//       xs={12}
//       zeroMinWidth
//       className={classes.gridItem}
//       style={border}
//     ></Grid>
//   </Grid>
// </div>
