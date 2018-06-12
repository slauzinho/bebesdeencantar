import {Facebook} from 'fb';
import React, { Component } from 'react';

const getBlogData = async () => {
  const FB = new Facebook();
  /* const res = await FB.api('oauth/access_token', {
    client_id: '620668848313207',
    client_secret: 'e5e1753113d4c566f3e76d05ba28289f',
    grant_type: 'client_credentials',
  }); */
  
  FB.setAccessToken("EAACEdEose0cBAIEQ3yUqEbRipwVJZCoZAvg6vXCcyb6Mj7ZB0rsgsn58egxfPBuc8KqA1hQC9VQRNNgigbNTK1Mg4W5xSfydSg1ydLjPPur4M99u4TTRyofj5ZCoJwRxxx6WX3RvGrQSWTYx6wRVdUNCas21KA5YcUAWZCwRURTyuuqYRLsjolyK2Ex8SoMMZD");
  const { data } = await FB.api('/625206280892267/feed', { fields: 'story, message, created_time, full_picture, permalink_url' })
  return data;
}


export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  siteRoute: 'https://www.bebesdeencantar.com',
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
            {/* <link href="https://fonts.googleapis.com/css?family=Pacifico|Roboto:400,700" rel="stylesheet" /> */}
            <link href="https://fonts.googleapis.com/css?family=Kanit:300,700|Pacifico" rel="stylesheet" />
            {renderMeta.styleTags}
            <title>Bebés de Encantar</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
