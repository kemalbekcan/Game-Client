import React, { Fragment } from "react";
import Image from "next/image";
import Layout from "../components/Layout";

function topics() {
  return (
    <Fragment>
      <Layout title="Konular" desc="konular" styleName="topics">
        <div className="matters-head">
          <h1 className="title">
            <span className="underline">Genel</span> Konular
          </h1>
          <button className="primary-button">KONU AÇ</button>
        </div>
        <div className="matters">
          <div className="matters-card">
            <div className="matters-icon">
              <Image
                src="/assets/bilgisayar-etiketli-konular.png"
                alt="Bilgisayar Etiketli Konular"
                color="red"
                width="294"
                height="294"
                objectFit="cover"
              />
            </div>
            <div>Bilgisayar Etiketli Konular</div>
          </div>
          <div className="konular">
            <div className="konu">
              <p className="text-white title">Konular</p>
              <p className="text-white">123</p>
            </div>
            <div className="konu">
              <p className="text-white title">Mesajlar</p>
              <p className="text-white">321</p>
            </div>
            <div className="konu">
              <p className="text-white title">Onaylanmış Yazılar</p>
              <p className="text-white">231</p>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default topics;
