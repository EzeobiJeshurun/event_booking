import { createMuiTheme } from "@material-ui/core/styles";
//add other custom styles to theme
const theme = createMuiTheme({
    palette:{
        primary:{
            light: '#f73378' ,
            main: '#f50057',
            dark: '#ab003c',
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
            special: '#C1C0f0',
        }
    },
    typography: {
      useNextVariants: true
    }
    });

    export default theme;
  