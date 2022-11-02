import React from "react";
import homeImage from "../logo/Group 3 1.png";
import HomeButton from "../event/HomeButton";

function Home() {
  return (
    <div className="home">
      <div className="textHome">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quo
          magni saepe, doloremque amet facilis autem pariatur voluptas nesciunt?
          Earum.
        </p>
        <HomeButton />
      </div>
      <div className="gambarHome">
        <img src={homeImage} alt="homeImage" />
      </div>
    </div>
  );
}

export default Home;
