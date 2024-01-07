import "./cv.css";
import { Divider, TextField, Dialog } from "@mui/material";
import { useState } from "react";
import { FaRegCopyright, FaHeart } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function CV() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDialog() {
    setIsOpen(true);
  }

  function handleDialogClose() {
    setIsOpen(false);
  }

  function handleEvenMotors() {
    window.location.href = "https://ikapil514.github.io/Even-Motors/";
  }

  function handleHomeFood() {
    window.location.href = "https://ikapil514.github.io/homefood/";
  }

  function handleCakery() {
    window.location.href = "https://ikapil514.github.io/cake_shop/";
  }

  return (
    <div className="main-div">
      <div className="navbar-head">
        <div className="letter-img"></div>
        <a href="mailto:kapilagarwal514@gamil.com" className="mybtn">
          Say Hello!
        </a>
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
        <div>
          <div className="project1">
            <div className="project1-image same-css"></div>
            <div className="project1-phn-image"></div>
            <div className="project1-data">
              <div className="headtext1">
                <button className="link-1" onClick={handleHomeFood}>
                  Home Food Delivery
                </button>
              </div>
              <div className="smalltxt1">
                de'HoFoo is determined to create a smooth flow between
                home-chefs and foodies. By bringing them on one platform, the
                process becomes easy and effective.
              </div>
              <p className="smalltxt1">Languages : JAVASCRIPT, HTML, CSS </p>
              <p className="smalltxt1">Tools : Marterial UI </p>
            </div>
          </div>
          <div className="project2">
            <div className="project2-image same-css"></div>
            <div className="project1-data">
              <div className="headtext1">
                <button className="link-2" onClick={handleCakery}>
                  Cakery
                </button>
              </div>
              <div className="smalltxt1">
                Providing a E-commerce website for cake lovers. Come take a
                look, order the cake u like or became baker who bakes a creamy
                cake for others and fill them with sweetness and happiness.
              </div>
              <p className="smalltxt1">Languages : JAVASCRIPT, HTML, CSS </p>
              <p className="smalltxt1">Tools : Marterial UI, Tailwind CSS </p>
            </div>
            <div className="project2-phn-image"></div>
          </div>
          <div className="project1">
            <div className="project3-phn-image"></div>
            <div className="project3-image same-css"></div>
            <div className="project1-data">
              <div className="headtext1">
                <button className="link-3" onClick={handleEvenMotors}>
                  Even Motors
                </button>
              </div>
              <div className="smalltxt1">
                A two-wheeler electric vehicle showroom is a retail space
                dedicated to showcasing and promoting electric scooters, bikes,
                and other two-wheeled electric vehicles (EVs). These showrooms
                play a pivotal role in introducing consumers to the benefits of
                electric mobility on a smaller scale. They typically feature a
                variety of electric two-wheelers, allowing potential buyers to
                explore different models, understand their features, and inquire
                about charging solutions.
              </div>
              <p className="smalltxt1">Languages : JAVASCRIPT, HTML, CSS </p>
            </div>
          </div>
        </div>
      </div>
      <Divider
        sx={{ backgroundColor: "black", width: "100%", marginBottom: "20px" }}
      />
      <h2 className="title">Get In Touch with Me</h2>
      <div className="contact-form">
        <div className="contact-img same-css"></div>
        <div className="three-fields">
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            placeholder="Enter Your Name"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            placeholder="example123@abc.com"
          />
          <TextField
            fullWidth
            margin="normal"
            minRows={3}
            maxRows={3}
            multiline
            label="Message Us"
            placeholder="Enter your Message"
            type="text"
          />
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button className="mybtn">Submit</button>
          </div>
        </div>
      </div>
      <div className="halfline">
        <div className="invite-button">
          <div className="invite-txt">
            Intersted in collaborating with me? I'm always open to discussing
            product design work
          </div>
          <button onClick={handleDialog} className="invite-btn">
            Let's Talk
          </button>
          <Dialog
            open={isOpen}
            PaperProps={{
              sx: {
                height: "70%",
                width: "60%",
                maxHeight: "100%",
                maxWidth: "100%",
              },
            }}
          >
            <div onClick={handleDialogClose} className="backbtn">
              <IoIosArrowRoundBack size={30} />
            </div>
            <div className="contact-form">
              <div className="three-fields">
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  placeholder="Enter Your Name"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  type="email"
                  placeholder="example123@abc.com"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  minRows={3}
                  maxRows={3}
                  multiline
                  label="Message Us"
                  placeholder="Enter your Message"
                  type="text"
                />
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button className="mybtn" onClick={handleDialogClose}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Dialog>
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
    </div>
  );
}
