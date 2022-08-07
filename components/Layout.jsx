import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

function Layout({ children, title, desc, styleName }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styleName}>{children}</main>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.desc,
  children: PropTypes.node,
  styleName: PropTypes.string,
};

export default Layout;
