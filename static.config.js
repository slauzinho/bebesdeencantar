/* eslint-disable */
import React, { Component } from "react";
import ReactStaticFavicons from "@kuroku/react-static-favicons";
import { ServerStyleSheet } from "styled-components";
import { SheetsRegistry } from "react-jss/lib/jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import path from "path";
require("dotenv").config();
import webpack from "webpack";

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
  siteRoot: "https://www.bebesdeencantar.com",
  getRoutes: async () => {
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
        component: "src/containers/Blog"
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  },
  renderToHtml: async (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();

    // test
    const sheetsRegistry = new SheetsRegistry();
    const generateClassName = createGenerateClassName();

    const html = render(
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        {sheet.collectStyles(<Comp />)}
      </JssProvider>
    );

    meta.faviconsElements = await reactStaticFavicons.render();
    meta.styleTags = sheet.getStyleElement();
    meta.jssStyles = sheetsRegistry.toString();

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

            <title>Bebés de Encantar</title>

            <meta
              name="description"
              content="Este espaço destina-se a dar sugestões para Aniversários, Batizados, Comunhões, Crismas, e demais cerimónias festivas...ou simplesmente oferecer um presente exlusivo e original"
            />
            <meta
              name="image"
              content="https://www.bebesdeencantar.com/static/header_img.d754384e.png"
            />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Bebés de Encantar" />
            <meta
              itemProp="description"
              content="Este espaço destina-se a dar sugestões para Aniversários, Batizados, Comunhões, Crismas, e demais cerimónias festivas...ou simplesmente oferecer um presente exlusivo e original"
            />
            <meta
              itemProp="image"
              content="https://www.bebesdeencantar.com/static/header_img.d754384e.png"
            />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Bebés de Encantar" />
            <meta
              name="og:description"
              content="Este espaço destina-se a dar sugestões para Aniversários, Batizados, Comunhões, Crismas, e demais cerimónias festivas...ou simplesmente oferecer um presente exlusivo e original"
            />
            <meta name="og:image" content="https://i.imgur.com/kaqXwFn.jpg" />
            <meta name="og:url" content="https://www.bebesdeencantar.com" />
            <meta name="og:site_name" content="Bebés de Encantar" />
            <meta name="og:locale" content="pt_PT" />
            <meta name="fb:admins" content={625206280892267} />
            <meta name="og:type" content="website" />
            <meta
              name="Keywords"
              content="bebes bebés comprar batizado baptizado velas conchas artigos blog comunhão comunhao lembranças lemrancas caixinhas envelopes"
            />
            {renderMeta.faviconsElements}
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
          <style id="jss-server-side">{renderMeta.jssStyles}</style>
        </Html>
      );
    }
  },

  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        LAMBDA_ENDPOINT: JSON.stringify(process.env.LAMBDA_ENDPOINT),
        FACEBOOK_KEY: JSON.stringify(process.env.FACEBOOK_KEY)
      })
    );
    return config;
  }
};
