import React from "react";
import MainContainer from "./Components/MainContainer/MainContainer";
import { sharedStyles } from "./material-ui/styles/sharedStyles";

function App() {
  const classes = sharedStyles();
  return (
    <div className={classes.mainContainer}>
      <MainContainer />
    </div>
  );
}

export default App;
