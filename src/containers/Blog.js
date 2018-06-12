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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GridItemStyle = css`
  padding: 1rem !important;
`

const CardActionStyle = css`
  align-self: flex-end;
`

export default withRouteData(({ posts }) => (


  <Grid container spacing={0} alignItems={"stretch"}>
    {posts.map(post => (
      <Grid item xs={12} sm={6} className={GridItemStyle} key={posts["created_time"]}>
      <Card className={CardStyle}>
      <div>

        <CardMedia
          image={post["full_picture"]}
          title={post.story}
          className={CardMediaStyle}
        />
        <CardContent>
          <Typography component="p">{post.message}</Typography>
        </CardContent>
      </div>
        <CardActions className={CardActionStyle}>
          <Button size="small" color="primary" href={post['permalink_url']}>
            Consultar
          </Button>
        </CardActions> 
      </Card>
      </Grid>
    ))}
  </Grid>

));
