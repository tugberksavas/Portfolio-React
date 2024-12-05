import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <section className="home section grid">
      <img
        src={Profile}
        alt=""
        // style={{ width: "400", height: "1000" }}
        className="home__img"
      />

      <div className="home_content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Tugberk Savas.</span> Frontend Developer.
          </h1>

          <p className="home__description">
            I'm a frontend developer with a passion for building user-centered
            digital experiences. I'm always looking for new challenges and
            opportunities to learn and grow.
          </p>
          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;
