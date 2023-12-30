import React, { useEffect, useState } from "react";
import Img1 from "../images/popular-1.jpg";
import Img2 from "../images/popular-2.jpg";
import Img3 from "../images/popular-3.jpg";

const Popular = (img) => {
  const [image, setImage] = useState();
  useEffect(() => {
    if ((img = "Popular1")) {
      setImage(Img1);
    } else if ((img = "Popular2")) {
      setImage(Img2);
    } else {
      setImage(Img3);
    }
  });

  return (
    <div className="popular-card">
      <figure className="card-img">
        <img src={image} alt="Kyoto temple, japan" loading="lazy" />
      </figure>
      <div className="card-content">
        <div className="card-rating">
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
          <ion-icon name="star" />
        </div>
        <p className="card-subtitle">
          <a href="#">Japan</a>
        </p>
        <h3 className="h3 card-title">
          <a href="#">Kyoto temple</a>
        </h3>
        <p className="card-text">
          Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
        </p>
      </div>
    </div>
  );
};

export default Popular;
