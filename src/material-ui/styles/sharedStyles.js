import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

export const sharedStyles = makeStyles(theme => ({
  mainContainer: {
    //background: "#ffcc33",
    width: "100%",
    height: "100%"
  },
  root: {
    minHeight: "100%",
    float: "left"
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column"
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 5px 5px 10px"
  },

  menubar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px"
  },

  gridDefault: {
    display: "grid",
    gridTemplateColumns: `repeat(${25}, 30px)`,
    gridTemplateRows: `repeat(${25}, 30px)`
  },
  gridSmall: {
    display: "grid",
    gridTemplateColumns: `repeat(${30}, 30px)`,
    gridTemplateRows: `repeat(${30}, 30px)`
  },
  gridMedium: {
    display: "grid",
    gridTemplateColumns: `repeat(${35}, 25px)`,
    gridTemplateRows: `repeat(${35}, 25px)`
  },
  gridLarge: {
    display: "grid",
    gridTemplateColumns: `repeat(${40}, 20px)`,
    gridTemplateRows: `repeat(${40}, 20px)`
  },
  gridDiv: {
    background: "white",
    minWidth: "20%",
    minHeight: "20%"
  },
  gridItem: {
    border: "1px solid grey",
    backgroundColor: "white"
  },
  button: {
    background: "#cce6ff",
    color: "black",
    "&:hover": {
      background: "#4da6ff",
      color: "white"
    }
  },
  alive: {
    background: "black"
  },
  dead: {
    background: "white"
  },
  rules: {},

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  image: {
    position: "relative",
    height: 100,
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  slider: {
    width: 300
  }
}));
