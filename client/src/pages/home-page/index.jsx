import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import image from "../../assets/images/hero-banner.png.webp";
import blog1 from "../../assets/images/blog1.png.webp";
import blog2 from "../../assets/images/blog2.png.webp";
import blog3 from "../../assets/images/blog3.png.webp";
import ProductsCard from "../../components/card-products";
import BestSellersCard from "../../components/card-best-sellers";
const HomePage = () => {
  return (
    <div id="home-page">
      <Helmet>
        <html lang="en" />
        <title>Aroma Shop - Home</title>
      </Helmet>
      <div className="home">
        <section className="first">
          <div className="left">
            <div className="container">
              <div className="img">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="container">
              <div className="about">
                <div className="text">
                  <h4>Shop is fun</h4>
                  <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                  <p>
                    Us which over of signs divide dominion deep fill bring
                    they're meat beho upon own earth without morning over third.
                    Their male dry. They are great appear whose land fly grass.
                  </p>
                  <button>Browse Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductsCard />
        <section id="basket">
          <div className="container">
            <div className="text">
              <h1>Up To 50% Off</h1>
              <h2>Winter Sale</h2>
              <p>Him she'd let them sixth saw light</p>
              <button>Shop Now</button>
            </div>
          </div>
        </section>
        <BestSellersCard />
        <section id="latestNews">
          <div className="container">
            <div className="latestNews">
              <p className="head">Popular Item in the market</p>
              <h1>Latest News</h1>
              <div className="line"></div>
              <div className="cards">
                <div className="card">
                  <div className="img">
                    <img src={blog1} alt="" />
                  </div>
                  <div className="infos">
                    <div className="admin">
                      <p>By admin </p>
                      <p>
                        <i className="fa-regular fa-face-smile"></i> 2 Comments
                      </p>
                    </div>
                    <h1>
                      The Richland Center Shooping News and weekly shooper
                    </h1>
                    <p>
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
                    </p>
                    <button>
                      Read More <i className="fa-sharp fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src={blog2} alt="" />
                  </div>
                  <div className="infos">
                    <div className="admin">
                      <p>By admin </p>
                      <p>
                        <i className="fa-regular fa-face-smile"></i> 2 Comments
                      </p>
                    </div>
                    <h1>
                      The Richland Center Shooping News and weekly shooper
                    </h1>
                    <p>
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
                    </p>
                    <button>
                      Read More <i className="fa-sharp fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src={blog3} alt="" />
                  </div>
                  <div className="infos">
                    <div className="admin">
                      <p>By admin </p>
                      <p>
                        <i className="fa-regular fa-face-smile"></i> 2 Comments
                      </p>
                    </div>
                    <h1>
                      The Richland Center Shooping News and weekly shooper
                    </h1>
                    <p>
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
                    </p>
                    <button>
                      Read More <i className="fa-sharp fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
