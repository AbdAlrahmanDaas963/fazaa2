import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import Earthquake from "../images/Earthquake.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Earthquake})` }}>
        <div className="headerContainer">
          <h1>Earthquake 2023</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>Help Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
