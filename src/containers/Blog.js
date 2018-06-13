import React from "react";
import { withRouteData } from "react-static";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

const CardMediaStyle = styled(CardMedia)`
  height: 15rem;
  background-size: contain;
  margin-bottom: 4rem;
`;

const CardStyle = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GridItemStyle = styled(Grid)`
  padding: 1rem !important;
`

const CardActionStyle = styled(CardActions)`
  align-self: flex-end;
`

export default withRouteData(({ posts }) => (


  <Grid container spacing={0} alignItems="stretch">
    {posts.map(post => (
      <GridItemStyle item xs={12} sm={6} key={posts["created_time"]}>
      <CardStyle>
      <div>

        <CardMediaStyle
          image={post["full_picture"]}
          title={post.story}
        />
        <CardContent>
          <Typography component="p">{post.message}</Typography>
        </CardContent>
      </div>
        <CardActionStyle>
          <Button size="small" color="primary" href={post['permalink_url']}>
            Consultar
          </Button>
        </CardActionStyle> 
      </CardStyle>
      </GridItemStyle>
    ))}
  </Grid>

));
