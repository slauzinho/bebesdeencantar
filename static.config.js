import {Facebook} from 'fb';
import React, { Component } from 'react';

const getBlogData = async () => {
  const FB = new Facebook();
  FB.setAccessToken("EAACEdEose0cBAC7gRBzS68Vy7FzIb3S49U0mnymRKIdnm1asZAYUjSlo7FXSczmSr3ZAxLGyGj6JqwZC17Jl8hZCDBhIuYdZCaYaQkWMK6EP6KiCqwnZB4n7LjLjdhsl5vHxtRiLOTFHYc3z9b0ZAgWUrd267xbj60UPRytVhZCSKioranPMhwjt7SMJdDvThLcZD");
  const { data } = await FB.api('/625206280892267/feed', { fields: 'story, message, created_time, full_picture' })
  console.log("SDAAAAAAAA")
  console.log(data);
  return data;
}


export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const posts = await getBlogData();
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Pacifico|Roboto:400,700" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            {renderMeta.styleTags}
            <title>Bebés de Encantar</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
