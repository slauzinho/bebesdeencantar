import React from "react";
import { withRouteData, Link } from "react-static";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled, { css } from "react-emotion";
import Grid from '@material-ui/core/Grid';

const CardMediaStyle = css`
  height: 15rem;
  background-size: contain;
  margin-bottom: 4rem;
`;

const CardStyle = css`
  height: 100%;
`

const GridItemStyle = css`
  padding: 1rem !important;
`

export default withRouteData(({ posts }) => (


  <Grid container spacing={0}>
    {posts.map(post => (
      <Grid item xs={12} sm={6} alignItems={"stretch"} className={GridItemStyle}>
      <Card className={CardStyle}>
        <CardMedia
          image={post["full_picture"]}
          title={post.story}
          className={CardMediaStyle}
        />
        <CardContent>
          <Typography component="p">{post.message}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Grid>
    ))}
  </Grid>

));
