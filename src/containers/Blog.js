import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { formatDistance, toDate } from 'date-fns';
import CircularProgress from '@material-ui/core/CircularProgress';
import FacebookMobilePost from '../components/FacebookMobilePost';

const CircleStyled = styled(CircularProgress)`
  color: #ff6f96 !important;
`

const GridItemStyle = styled(Grid)`
  padding: 1rem !important;
`

export default class Blog extends React.Component {
  state = {
    posts: null
  }
  async componentDidMount() {
    fetch(`${process.env.LAMBDA_ENDPOINT}posts`).then(res => {
      return res.json()
    }).then(data => {
      this.setState({ posts: data })
    })
  }
  render() {
    const { posts } = this.state;
    if (posts) {
      const postsFiltered = posts.filter(post => post['message'])
      return (
        <Grid container spacing={0} alignItems="stretch">
      {postsFiltered.map(post => (
        <GridItemStyle item xs={12} sm={6} key={posts["id"]}>
        {console.log(toDate('2014-02-11T11:30:30'))}
        <FacebookMobilePost 
          meta={{
            ogUrl: "Bebes de Encantar", 
            ogTitle: "", 
            ogDescription: post.message, 
            ogImage: {url: post.full_picture}}
          }
          likes={post.likes.summary.total_count}
          date={formatDistance(toDate(post["created_time"]), new Date())}
          link={post['permalink_url']}
      />
      </GridItemStyle>
      ))}
    </Grid>
      )
    }
   return <CircleStyled size={50} />
  }
}
