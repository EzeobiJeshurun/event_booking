import React from 'react';
import { MuiThemeProvider,} from '@material-ui/core/styles';
import theme from '../styles/theme';
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import NoSsr from "@material-ui/core/NoSsr";
import { render } from "@testing-library/react";

const renderer = (component, options={}) => {
  let componentToRender = component;

  if (options.route) {
    const { route, path } = options.route;

    const history = createMemoryHistory({ initialEntries: [route] });

    history.push(path);

    componentToRender = (
      <Router history={history}>
        <Route path={route}>{component}</Route>
      </Router>
    );
  }

  return {
    ...render(
      <NoSsr>
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <MuiThemeProvider theme={theme}>
                <BrowserRouter>{componentToRender}</BrowserRouter>
              </MuiThemeProvider>
            </ThemeProvider>
        </StylesProvider>
      </NoSsr>
    ),
  };
};

export default renderer;
