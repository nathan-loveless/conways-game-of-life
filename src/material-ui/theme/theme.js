import { createMuiTheme } from "@material-ui/core/styles";

const primaryLight = "#ddebee";
const primaryMain = "#75b0bd";
const primaryDark = "#325d67";

const secondaryLight = "#f1ecda";
const secondaryMain = "#c7b36b";
const secondaryDark = "#6f602a";

export default createMuiTheme({
  palette: {
    primary: {
      light: `${primaryLight}`,
      main: `${primaryMain}`,
      dark: `${primaryDark}`
    },
    secondary: {
      light: `${secondaryLight}`,
      main: `${secondaryMain}`,
      dark: `${secondaryDark}`
    }
  }
});
