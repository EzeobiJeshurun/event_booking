import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette:{
        primary:{
            light: '#ed4b82' ,
            main: '#e91e63',
            dark: '#a31545',
            contrastText: '#fff'
        },
        secondary:{
            light: '#fff179',
            main: '#d50000',
            dark: '#b2a63d',
            contrastText: '#fff'
        },
        grey: {
            main: '#F9FAFB',
            dark: '#F3F5F7',
        }
    },
    typography: {
      useNextVariants: true
    }
    });

    export default theme;
  