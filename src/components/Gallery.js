import React from "react";
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
    transition: all 0.5s;
    backface-visibility: hidden;
    font-family: "Pacifico", cursive;
    font-style: normal;
    font-weight: normal;
    color: white;
    text-align: center;
    font-size: 2rem;
    user-select: none !important;

    @media (max-width: 930px) {
      font-size: 1.5rem;
    }

    @media (max-width: 715px) {
      font-size: 1rem;
    }

    @media (max-width: 490px) {
      font-size: 0.9rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 3px;
    }

    @media (max-width: 411px) {
      font-size: 0.7rem;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
    }

    @media (max-width: 375) {
      font-size: 13px;
      font-family: "Roboto", sans-serif;
      letter-spacing: 1px;
    }
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
  const { tileData } = props;
  return (
    <GridList cellHeight={160} cols={3}>
      {tileData.map(tile => (
        <GridListTile
          key={tile.img}
          cols={tile.cols || 1}
          className={GridListTileStyle}
        >
          <img src={tile.img} alt={tile.title} />
          <span>{tile.title}</span>
        </GridListTile>
      ))}
    </GridList>
  );
};

export default withStyles(styles)(Gallery);
