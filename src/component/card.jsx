import React, { useId, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const card = ({ data }) => {
  const [imageCount, setImageCount] = useState(data.images);
  const id = useId;

  return (
    <div className="my-1">
      <div className="card col">
        {/* <img src={data.thumbnail} style={{ height: "18rem", width: "10rem", margin: "auto" }} /> */}
        <div id={data.id} className="carousel slide" data-bs-touch="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={data.thumbnail} className="d-block w-100" alt="..." style={{ height: "18rem", width: "10rem", margin: "auto" }} />
            </div>
            <div className="carousel-item">
              <img src={data.images[0]} className="d-block w-100" alt="..." style={{ height: "18rem", width: "10rem", margin: "auto" }} />
            </div>
            <div className="carousel-item">
              <img src={data.images[1]} className="d-block w-100" alt="..." style={{ height: "18rem", width: "10rem", margin: "auto" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${data.id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${data.id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text" style={{ minHeight: "5rem" }}>
            {data.description}
          </p>
          <p className="card-text">
            {"$"}
            {data.price}
          </p>
          <a href="#" className="btn btn-primary">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default card;
