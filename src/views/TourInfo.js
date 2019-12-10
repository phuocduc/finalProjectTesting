import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../assets/css/tourInfo.css";
import Navibar from "../components/Navibar";
import imageSlider from "../assets/img/sliderNotFound.JPG";

export default function TourInfo() {
  const [toursChild, setTourChild] = useState([]);
  const [tourInfo, setTourInfo] = useState([]);
  console.log("tourinfo", tourInfo.title);
  const param = useParams();
  const history = useHistory();
  const getTourImg = async () => {
    const res = await fetch(
      `https://127.0.0.1:5000/tours/${param.id}/pictures`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    if (res.status !== 200) return;

    const data = await res.json();
    setTourChild(data.Image[0]);
  };

  const getTourInfo = async () => {
    const response = await fetch(
      `https://127.0.0.1:5000/destinations/${param.id}`
    );
    const data = await response.json();
    setTourInfo(data.tour);
  };
  useEffect(() => {
    getTourInfo();
    getTourImg();
  }, []);

  return (
    <div>
      <Navibar />

      <div className="simple-slider container">
        <div className="activity-title-container">
          <h1>{tourInfo.title}</h1>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${
                    toursChild ? toursChild.img_first : imageSlider
                  })`
                }}
              ></div>
            </div>

            <div className="carousel-item">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${
                    toursChild ? toursChild.img_second : imageSlider
                  })`
                }}
              ></div>
            </div>

            <div className="carousel-item">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${
                    toursChild ? toursChild.img_third : imageSlider
                  })`
                }}
              ></div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
            data-slide-to="1"
            data-target="#carouselExampleIndicators"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            data-slide-to="2"
            data-target="#carouselExampleIndicators"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* info tour */}
        <div className="activity-columns container">
          <div className="row">
            <div className="activity-column-major col-12 col-md-8">
              {/* description  */}
              <div className="overview-certified-container">
                <div className="content">{tourInfo.description}</div>
              </div>
            </div>
            {/* price  */}
            <div className="activity-column-minor col-12 col-md-4">
              <div className="price-block">
                <div className="activity-features-price top-border-highlight">
                  <p className="price">
                    <span className="price-from">From</span>
              <strong className="price-actual">đ&nbsp; {tourInfo.prices}</strong>
                    <span className="price-from">per person</span>
                  </p>
                  <div className="btn-wrap">
                    <a className="btn btn-cta btn-small">Book now</a>
                  </div>
                </div>
                <div className="activity-utils">
                  <ul>
                    <li className="activity-utils-checklist-item box-item icon-heart">
                      <a><span><i className="fa fa-heart" aria-hidden="true"></i>    Add to wishlist</span></a>
                    </li>
                    <li className="activity-utils-checklist-item icon-gift">
                      <a><span><i className="fa fa-gift" aria-hidden="true"></i>     Give this as a gift</span></a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
