import React from "react";
import "./App.css";
import profilePhoto from "./profile.jpeg";

function App() {
  return (
    <div className="App">
      <h1><i>kanna vivek</i></h1>
      <img src={profilePhoto} alt="kanna vivek" className="profile-photo" />
      <h2><i>Introduction</i></h2>
      <p>
        I am a software engineer with a passion for building web applications.
        I am a quick learner and I am always looking to improve my skills.
      </p>
      <h2><i>Hobbies</i></h2>
      <ul>
        <li>Coding</li>
        <li>Photography</li>
        <li>Traveling</li>
        <li>Reading</li>
      </ul>
    </div>
  );
}

export default App;
