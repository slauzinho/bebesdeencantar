import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import styled, { css, injectGlobal } from "react-emotion";
import Routes from "react-static-routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Navigation from './components/Navigation';

import logo from "./assets/logo.png";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Kanit', sans-serif;
    font-family: Kanit;
    font-weight: 300;
    font-style: normal;
  }
`;

const Container = styled("div")`
  max-width: 1024px;
  margin: 0 auto;
`;


/* const hoverColor = css`
  &:hover {
    background-color: rgba(255,111,150, 0.2) !important;
  }
` */
const App = () => (
  <Router>
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Navigation />
        <div className="content">
          <Routes />
        </div>
      </Container>
    </React.Fragment>
  </Router>
);

export default hot(module)(App);
