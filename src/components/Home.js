import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="container">
      <div className="textSection">
        <h1 className="heading">Welcome to my portfolio</h1>
        <p className="introduction">
          Hi, I'm Spandan Deb, and this is my personal portfolio where I showcase my skills and projects.
        </p>
      </div>
      <div className="imageSection">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQF-RPAUaqeFtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715175336507?e=1734566400&v=beta&t=qnXt-VI6QGwi02u0fmbWmrnY2D54y4COhpWk5huEAd0"  // Use the image URL here
          alt="Profile" 
          className="profilePic" 
        />
      </div>
    </div>
  );
}

export default Home;
