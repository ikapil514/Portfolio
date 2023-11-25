import "./cv.css";
import { Divider, Dialog, TextField, Button } from "@mui/material";
import { useState } from "react";
import { FaRegCopyright, FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function CV() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDialogOpen() {
    setIsOpen(true);
  }

  function handleDialogClose() {
    setIsOpen(false);
  }
  return (
    <div className="main-div">
      <div className="navbar-head">
        <div className="letter-img"></div>
        <button className="mybtn" onClick={handleDialogOpen}>
          Say Hello!
        </button>
      </div>
      <div className="text-div">
        <div className="headline-txt">Frontend Developer</div>
        <div className="secondary-txt">
          I design and code beautifully simple things, and I love what I do.
        </div>
      </div>
      <div className="profile-img"></div>
      <div className="big-img"></div>
      <div className="my-txt">
        <div className="head-secondary">
          <h1 className="intro">Hi, I'm Kapil. Nice to meet you.</h1>
          <p className="intro-child">
            A skilled front-end developer in crafting responsive and visually
            appealing web applications. Seeking opportunities to contribute
            technical expertise and creativity to innovative projects.
          </p>
        </div>
        <h2 className="lng-play">Languages to play with...</h2>
      </div>
      <div className="skills-ul">
        <li>HTML</li>
        <li>JAVASCRIPT</li>
        <li>CSS</li>
        <li>TYPESCRIPT</li>
        <li>REACT</li>
      </div>
      <div className="tools-div">
        <h2 className="tools">Tools I like to work with...</h2>
        <div className="all-images">
          <div className="bootstrap same-css"></div>
          <div className="material-ui same-css"></div>
          <div className="tailwind same-css"></div>
          <div className="github same-css"></div>
          <div className="figma same-css"></div>
        </div>
      </div>
      <Divider sx={{ backgroundColor: "black", width: "100%" }} />
      <div className="projects-div">
        <h2 className="title">Pet Projects</h2>
        <div className="project-name">
          <div className="project1">
            <div className="headtext1">Home Food Delivery</div>
            <div className="smalltxt1">
              de'HoFoo is determined to create a smooth flow between home-chefs
              and foodies. By bringing them on one platform, the process becomes
              easy and effective.
            </div>
          </div>
          <div className="project2">
            <div className="headtext1">Farm House Motel</div>
            <div className="smalltxt1">
              Providing amenities and facilities that cater to the needs of
              guests, such as comfortable bedding, room cleanliness, in-room
              amenities, and easy access to services.
            </div>
          </div>
          <div className="project-image"></div>
        </div>
      </div>
      <div className="halfline">
        <div className="invite-button">
          <div className="invite-txt">
            Intersted in collaborating with me? I'm always open to discussing
            product design work
          </div>
          <button className="invite-btn" onClick={handleDialogOpen}>
            Let's Talk
          </button>
        </div>
      </div>
      <div className="footer-div">
        <div className="letter-img"></div>
        <div className="footer-txt">
          "In this universe Life has an end but, in Life Learning never ends
        </div>
        <div className="social-logo">
          <a href="https://github.com/ikapil514">
            <div className="git same-css"></div>
          </a>
          <a href="https://github.com/ikapil514">
            <div className="insta same-css"></div>
          </a>
          <a href="https://github.com/ikapil514">
            <div className="twitter same-css"></div>
          </a>
          <a href="https://github.com/ikapil514">
            <div className="linkin same-css"></div>
          </a>
        </div>
        <p className="footer-minitxt">
          Handcrafted by me
          <FaRegCopyright />
          2023
        </p>
        <div className="footer-minitxt">
          Made with
          <FaHeart color="red" />
        </div>
      </div>
      <Dialog open={isOpen} fullWidth>
        <div className="close-div">
          <IoMdClose size={26} onClick={handleDialogClose} />
        </div>
        <div className="dialog-text">
          <h2>I'm excited to talk and learn from you.</h2>
          <TextField
            label="Email-ID"
            placeholder="Enter Your Email-ID"
            type="email"
            margin="normal"
          />
          <br />
          <button className="invite-btn" onClick={handleDialogClose}>
            Send
          </button>
          <h2 className="text-field">
            I will contact you as soon as possible. ThankYou!
          </h2>
        </div>
      </Dialog>
    </div>
  );
}
