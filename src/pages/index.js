import * as React from "react";
import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
import mainSection from "../images/front-image.jpg";
import "../main.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className="main-section">
        {/* <StaticImage alt="neon restaurant" src="../images/front-image.jpg" /> */}
        <img src={mainSection} alt="neon restaurant" />
      </div>
    </Layout>
  );
};

export default IndexPage;

