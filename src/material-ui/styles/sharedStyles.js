import { makeStyles } from "@material-ui/core/styles";

export const sharedStyles = makeStyles(theme => ({
  root: {
    minWidth: "75%",
    minHeight: "100%"
  },
  gridDiv: {
    background: "white",
    minWidth: "20%",
    minHeight: "20%"
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    minWidth: "0"
  },
  gridItem: {
    //   border: "1px solid black",
    //   minWidth: "20%",
    //   minHeight: "20%"
    minWidth: "0"
  }
}));
