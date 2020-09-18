import React from 'react';
import { MuiThemeProvider,} from '@material-ui/core/styles';
import theme from './styles/theme';
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Schedule from './pages/Schedule';
import Home from './pages/Home';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store} >
            <div className="App">
              <Router>
                <Switch>
                 <Route exact path="/schedule/:id" component={Schedule} />
                 <Route exact path="/" component={Home} />
                </Switch>
              </Router>
            </div>
            </Provider>  
         </MuiThemeProvider>
       </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
