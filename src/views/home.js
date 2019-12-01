import React from "react";
import Navibar from "../components/Navibar";
import headerBg from "../assets/img/header-bg.jpg";
import foodImg from "../assets/img/food-2.jpg";
import tourImg from "../assets/img/tour-2.jpg";
import historyImg from "../assets/img/history-2.jpg";
import "../assets/css/home.css";
import TravelStatic from "../components/TravelStatistic";
import Footer from "../components/Footer";

export default function home() {
  return (
    <div>
      <Navibar />

      <header
        className="masthead"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="container">
          <div className="intro-text">
            <div id="div8" className="intro-lead-in">
              <span>
                According to Unesco, "There are 8 Amazing World Heritage Sites
                in Vietnam"
              </span>
            </div>
            <div className="intro-heading text-uppercase">
              <span></span>
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              role="button"
              href="#services"
            >
              Begin Your Adventure
            </a>
          </div>
        </div>
      </header>
      {/* part 2 */}
      <div class="article-list">
        <div class="container">
          <div class="intro">
            <h2 class="text-center">The Reason Why You Should Visit Vietnam</h2>
            <p class="text-center">
              Vietnam is getting more and more popular nowadays as one of the
              most worth-exploring travel destinations in Southeast Asia.
            </p>
          </div>
          <div class="row articles">
            <div class="col-sm-6 col-md-4 item">
              <a href="#">
                <img class="img-fluid" src={foodImg} />
              </a>
              <h3 class="name">Diverse dishes</h3>
              <p class="description">
                Vietnamese food is simple but charming and delicate, which makes
                diners around the world fascinated.
              </p>
            </div>
            <div class="col-sm-6 col-md-4 item">
              <a href="#">
                <img class="img-fluid" src={historyImg} />
              </a>
              <h3 class="name">History</h3>
              <p class="description">
                More than 3,000 years of building and defending the country,
                Vietnam is an important part of the history of the world.
              </p>
            </div>
            <div class="col-sm-6 col-md-4 item">
              <a href="#">
                <img class="img-fluid" src={tourImg} />
              </a>
              <h3 class="name">Spectacular natural scenery</h3>
              <p class="description">
                From the jungle to the largest natural cave in the world, nature
                offers many beautiful scenery to Vietnam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* part 3*/}

      <TravelStatic />

      {/* part footer*/}

      <Footer />

      <div class="gototop js-top">
        <a href="#" class="js-gotop">
          <i class="icon-arrow-up">sdfdsf</i>
        </a>
      </div>
    </div>
  );
}
