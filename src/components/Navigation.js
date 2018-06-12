import React from "react";
import { Link } from "react-static";
import styled, { css } from "react-emotion";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

/* Images */
import logo from "../assets/logo.png";

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

  @media (max-width: 600px) {
    display: flex;
    /* flex-direction: column; */
    a {
      margin-right: 0 !important;
      font-size: 12px;
    }
    .MuiButton-outlined-45 {
      border: none !important;
    }
  }
`;

const navigationMobileStyle = css`
  width: 100%;
  &:hover {
    background-color: #ffdfe8;
  }
`;

const toolBarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  background-color: #fafafa;
  box-shadow: none !important;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const toolBarLogo = css`
  display: flex;
  align-items: center;
  white-space: nowrap;

  img {
    margin-right: 1rem;
  }
`;

const AppBarStyled = styled(AppBar)`
  box-shadow: none;
  background-color: #fafafa !important;
  box-shadow: none !important;
  margin-top: 1rem;
`;

const Title = styled("h1")`
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: normal;
  color: #272727;
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDesktop() {
    return (
      <div className={navigationStyle}>
        <Button component={Link} exact to="/">
          Home
        </Button>
        <Button component={Link} exact to="/blog">
          Blog
        </Button>
        <Button component={Link} exact to="/#contactos">
          Contactos
        </Button>
      </div>
    );
  }

  render() {
    return (
      <AppBarStyled position="static" color="default">
        <Toolbar className={toolBarStyle}>
          <div className={toolBarLogo}>
            <img src={logo} alt="Logo" />
            <Title>Bebés de encantar</Title>
          </div>
          {this.renderDesktop()}
        </Toolbar>
      </AppBarStyled>
    );
  }
}

export default Navigation;
