import React from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile.jsx";
import "./Home.css";
import Header from "./Header/Header";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

//id={props.id || ""}
export default Home;
