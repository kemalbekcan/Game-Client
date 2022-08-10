import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

function login() {
  function onSubmit(e) {
    e.preventDefault();
    console.log("e", e);
  }
  return (
    <Fragment>
      <Layout title="Login" desc="login" styleName="login">
        <div className="">
          <button className="register-button">KAYIT OL</button>
          <button className="sign-button">GİRİŞ YAP</button>
        </div>
        <div>
          <div className="user-profile-image">
            <Image
              src="/user-profile-image.png"
              width="294"
              height="294"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input className="primary-input" type="text" name="email" />
            <input className="primary-input" type="password" name="password" />
            <input className="primary-button" type="submit" value="GİRİŞ YAP" />
          </form>
        </div>
        <div className="password-forget">
          <Link href="/">
            <a>Şifremi unuttum.</a>
          </Link>
        </div>
      </Layout>
    </Fragment>
  );
}

export default login;
