import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

export const sharedStyles = makeStyles(theme => ({
  root: {
    minWidth: "75%",
    minHeight: "100%",
    float: "left"
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
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    minWidth: "0"
  },
  gridItem: {
    border: "1px solid grey",
    backgroundColor: "white"
    // width: "30px",
    // height: "30px"
  },
  alive: {
    background: "black"
  },
  dead: {
    background: "white"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   minWidth: 300,
  //   width: '100%',
  // },
  image: {
    position: "relative",
    height: 100,
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
