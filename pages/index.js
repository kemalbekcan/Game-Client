import React, { Fragment } from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Fragment>
      <Layout title="Anasayfa" desc="Anasayfa" styleName="rules">
        <div className="card">
          <div className="rule-list">
            <h1>Kurallar</h1>
            <ul>
              <li>Diğer kullanıcılara karşı saygılı ol.</li>
              <li>Konulara bilgin dışında ve konu dışında yorum yapma.</li>
              <li>
                Konularda ve Yorumlarda Küfür/Hakaret içeren cümleler kurma
              </li>
              <li>Konuyu doğru başlıkta açtığından emin ol</li>
            </ul>
          </div>
          <div>
            <p>Kuralları Kabul Ediyorum</p>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Home;
