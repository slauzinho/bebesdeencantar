/* eslint-disable */
import { Facebook } from "fb";
import React, { Component } from "react";
import ReactStaticFavicons from "@kuroku/react-static-favicons";
import path from "path";

const getBlogData = async () => {
  const FB = new Facebook();
  /* const res = await FB.api('oauth/access_token', {
    client_id: '620668848313207',
    client_secret: 'e5e1753113d4c566f3e76d05ba28289f',
    grant_type: 'client_credentials',
  }); */

  FB.setAccessToken(
    "EAACEdEose0cBAJGNxM6NtSsuho6RAzemWnMAQtKkvkK8ZBGTaGazMxFAoVb0XybYbf6GKigoxAswzZAjVdvFNtmL0IjeorgVFJW53UYDhERYZBraaJ2YZCZADnn3ixaeaWlEerNVYwcYYSNZAoPkjZBPr8nMqOGwhToQdc7o6sD9ciUIpELue1qqSRniRE2RdkZD"
  );
  const { data } = await FB.api("/625206280892267/feed", {
    fields: "story, message, created_time, full_picture, permalink_url"
  });
  return data;
};

const reactStaticFavicons = new ReactStaticFavicons({
  // string: directory where the image files are written
  outputDir: path.join(__dirname, "dist"),

  // string: the source image
  inputFile: path.join(__dirname, "src/logo.png"),

  // object: the configuration passed directory to favicons
  configuration: {
    icons: {
      favicons: true
      // other favicons configuration
    }
  }
});

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  siteRoot: 'https://www.bebesdeencantar.com',
  getRoutes: async () => {
    const posts = await getBlogData();
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: "/about",
        component: "src/containers/About"
      },
      {
        path: "/blog",
        component: "src/containers/Blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  },
  renderToHtml: async (render, C, meta) => {
    meta.faviconsElements = await reactStaticFavicons.render();
    const html = render(<C />);
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {/* <link href="https://fonts.googleapis.com/css?family=Pacifico|Roboto:400,700" rel="stylesheet" /> */}
            <link
              href="https://fonts.googleapis.com/css?family=Kanit:300|Pacifico"
              rel="stylesheet"
            />
            <meta
          name="description"
          content="Este espaço destina-se a dar sugestões para Aniversários, Batizados, Comunhões, Crismas, e demais cerimónias festivas...ou simplesmente oferecer um presente exlusivo e original"
        />
        <meta
          name="Keywords"
          content="bebes bebés comprar batizado baptizado velas conchas artigos blog comunhão comunhao lembranças lemrancas caixinhas envelopes"
        />
            {renderMeta.faviconsElements}
            <title>Bebés de Encantar</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
