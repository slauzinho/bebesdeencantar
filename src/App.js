import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import styled, { css, injectGlobal } from "react-emotion";
import Routes from "react-static-routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

import logo from "./assets/logo.png";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const Container = styled("div")`
  max-width: 1024px;
  margin: 0 auto;
`;

const toolBarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  background-color: #fafafa;
`;

const navigationStyle = css`
  a:not(:last-child) {
    margin-right: 2rem;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover {
    background-color: #ffdfe8;
  }
  .MuiButton-outlined-10 {
    border: 1px solid rgba(255, 111, 150, 0.5);
  }
`;

const toolBarLogo = css`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`;

const Test = styled(AppBar)`
  box-shadow: none;
  background-color: #fafafa;
`;

const Title = styled("h1")`
  font-family: "Pacifico", cursive;
  color: #272727;
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
        <Test position="static" color="default">
          <Toolbar className={toolBarStyle}>
            <div className={toolBarLogo}>
              <img src={logo} alt="Logo" />
              <Title>Bebés de encantar</Title>
            </div>
            <div className={navigationStyle}>
              <Button component={Link} exact to="/">
                Home
              </Button>
              <Button component={Link} exact to="/blog">
                Blog
              </Button>
              <Button component={Link} exact to="/about" variant="outlined">
                Contactos
              </Button>
            </div>
          </Toolbar>
        </Test>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </React.Fragment>
  </Router>
);

export default hot(module)(App);
