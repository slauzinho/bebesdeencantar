import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles } from "@material-ui/core/styles";
import { css } from "react-emotion";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: "100%"
  }
});

const GridListTileStyle = css`
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: $color-white;
        text-transform: uppercase;
        text-align: center;
        opacity: 0;
        transition: all .5s;
        backface-visibility: hidden;
        font-family: "Pacifico",cursive;
        font-style: normal;
        font-weight: normal;
        color: white;
        text-align: center;
        font-size: 2rem;
    }

    &:hover span {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &:hover img {
        filter: blur(3px) brightness(80%);
    }
`;

const Gallery = props => {
  const { tileData, classes } = props;
  return (
    
      <GridList cellHeight={160} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={GridListTileStyle}>
            <img src={tile.img} alt={tile.title} />
            <span>{tile.title}</span>
          </GridListTile>
        ))}
      </GridList>
    
  );
};

export default withStyles(styles)(Gallery);
