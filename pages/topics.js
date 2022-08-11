import React, { Fragment } from "react"
import Layout from "../components/Layout";

function topics() {
    return (
        <Fragment>
            <Layout title="Konular" desc="konular" styleName="topics">
                <div>
                <h1>Genel Konular</h1>
                <button>KONU AÇ</button>
                </div>
                <div className="matters">
                    <div className="">
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

export default topics