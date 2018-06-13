import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
import styled, { injectGlobal } from "styled-components";
import Routes from "react-static-routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from './components/Navigation';


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
