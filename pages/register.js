import React, { Fragment } from "react";
import Layout from "../components/Layout";

function register() {
  function onSubmit(e) {
    e.preventDefault();
    console.log("e", e);
  }
  return (
    <Fragment>
      <Layout title="Register" desc="register" styleName="register">
        <div className="">
          <button className="sign-button">KAYIT OL</button>
          <button className="sign-button">GİRİŞ YAP</button>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input className="primary-input" type="text" name="username" />
            <input className="primary-input" type="text" name="email" />
            <input className="primary-input" type="password" name="password" />
            <input className="primary-button" type="submit" value="GİRİŞ YAP" />
          </form>
        </div>
      </Layout>
    </Fragment>
  );
}

export default register;
