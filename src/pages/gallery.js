import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import { container, listItem, imageItem } from "./gallery.module.css";

// import all images from folder
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imagesObj = importAll(
  require.context("../images/gallery-images", false, /\.(png|jpe?g|svg)$/)
);

const imagesArr = Object.values(imagesObj);

const Gallery = () => {
  const [imag, setImag] = useState(imagesArr);

  return (
    <Layout>
      <ul className={container}>
        {imag.map((i) => (
          <li className={listItem}>
            <img className={imageItem} src={i.default} alt={i.default} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Gallery;
