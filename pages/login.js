import React, { Fragment } from "react";
import Layout from "../components/Layout";

function login() {
  function onSubmit(e) {
    e.preventDefault();
    console.log("e", e);
  }
  return (
    <Fragment>
      <Layout title="Login" desc="login" styleName="login">
        <div className="">
          <button className="sign-button">KAYIT OL</button>
          <button className="sign-button">GİRİŞ YAP</button>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input className="primary-input" type="text" name="email" />
            <input className="primary-input" type="password" name="password" />
            <input className="asd" type="submit" value="GİRİŞ YAP" />
          </form>
        </div>
      </Layout>
    </Fragment>
  );
}

export default login;
