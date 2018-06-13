import React from "react";
import { Link } from "react-static";
import styled, { css } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

/* Images */
import logo from "../assets/logo.png";

const BavigationStyle = styled.div`
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

const ToolBarStyle = styled(Toolbar)`
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

const ToolBarLogo = styled.div`
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

const Navigation = () => (
  <AppBarStyled position="static" color="default">
    <ToolBarStyle>
      <ToolBarLogo>
        <img src={logo} alt="Logo" />
        <Title>Bebés de encantar</Title>
      </ToolBarLogo>
      <BavigationStyle>
        <Button component={Link} exact to="/">
          Home
        </Button>
        <Button component={Link} exact to="/blog">
          Blog
        </Button>
        <Button component={Link} exact to="/#contactos">
          Contactos
        </Button>
      </BavigationStyle>
    </ToolBarStyle>
  </AppBarStyled>
);

export default Navigation;
