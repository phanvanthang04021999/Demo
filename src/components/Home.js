import React from "react";
import Header from "../layouts/Menu";
import Popular from "./Popular";
import Img1 from "../images/popular-1.jpg";
import Img2 from "../images/popular-2.jpg";
import Img3 from "../images/popular-3.jpg";
import Gallery from "./Gallery";
import Packeges from "./Packeges";
import Footer from "../layouts/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <h2 className="h1 hero-title">Journey to explore world</h2>
              <p className="hero-text">
                Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus?
                Suscipit class corporis nostra rem quos voluptatibus habitant?
                Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
              </p>
              <div className="btn-group">
                <button className="btn btn-primary">Learn more</button>
                <button className="btn btn-secondary">Book now</button>
              </div>
            </div>
          </section>
          <section className="tour-search">
            <div className="container">
              {/* <form action="" className="tour-search-form">
                <div className="input-wrapper">
                  <label htmlFor="destination" className="input-label">
                    Search Destination*
                  </label>
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    required=""
                    placeholder="Enter Destination"
                    className="input-field"
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="people" className="input-label">
                    Pax Number*
                  </label>
                  <input
                    type="number"
                    name="people"
                    id="people"
                    required=""
                    placeholder="No.of People"
                    className="input-field"
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="checkin" className="input-label">
                    Checkin Date**
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    id="checkin"
                    required=""
                    className="input-field"
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="checkout" className="input-label">
                    Checkout Date*
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    id="checkout"
                    required=""
                    className="input-field"
                  />
                </div>
                <button type="submit" className="btn btn-secondary">
                  Inquire now
                </button>
              </form> */}
            </div>
          </section>
          {/* 
  - #POPULAR
*/}
          <section className="popular" id="destination">
            <div className="container">
              <p className="section-subtitle">Uncover place</p>
              <h2 className="h2 section-title">Popular destination</h2>
              <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>
              <ul className="popular-list">
                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img src={Img1} alt="San miguel, italy" loading="lazy" />
                    </figure>
                    <div className="card-content">
                      {/* <div className="card-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div> */}
                      <p className="card-subtitle">
                        <a href="#">Italy</a>
                      </p>
                      <h3 className="h3 card-title">
                        <a href="#">San miguel</a>
                      </h3>
                      <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur,
                        iusto.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src={Img2}
                        alt="Burj khalifa, dubai"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-content">
                      {/* <div className="card-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div> */}
                      <p className="card-subtitle">
                        <a href="#">Dubai</a>
                      </p>
                      <h3 className="h3 card-title">
                        <a href="#">Burj khalifa</a>
                      </h3>
                      <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur,
                        iusto.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src={Img3}
                        alt="Kyoto temple, japan"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-content">
                      {/* <div className="card-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div> */}
                      <p className="card-subtitle">
                        <a href="#">Japan</a>
                      </p>
                      <h3 className="h3 card-title">
                        <a href="#">Kyoto temple</a>
                      </h3>
                      <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur,
                        iusto.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <button className="btn btn-primary">More destintion</button>
            </div>
          </section>
          {/* 
  - #PACKAGE
*/}
          <Packeges />
          {/* 
  - #GALLERY
*/}
          <Gallery />
          {/* 
  - #CTA
*/}
          <section className="cta" id="contact">
            <div className="container">
              <div className="cta-content">
                <p className="section-subtitle">Call To Action</p>
                <h2 className="h2 section-title">
                  Ready For Unforgatable Travel. Remember Us!
                </h2>
                <p className="section-text">
                  Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                  nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare
                  mollitia tenetur, aptent.
                </p>
              </div>
              <button className="btn btn-secondary">Contact Us !</button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
