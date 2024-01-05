import { Component } from "react";
import Project from "../project";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import {"attachment.jpg"} from '../../public.images'
// import wave-haikei.svg as wave from ../../public'

import "./index.css";

class Home extends Component {
  state = {
    projectName: "",
    projectLink: "",
    description: "",
    projectsList: [
      {
        name: "project 1",
        link: "https://github.com/Venkatesh3696/commentsApp/",
        description:
          "I created this project to show how to build a portfolio website",
        imageUrl:
          "https://res.cloudinary.com/dgcysjarm/image/upload/v1668014040/samples/ecommerce/car-interior-design.jpg",
      },
      {
        name: "project 2",
        link: "https://github.com/Venkatesh3696/commentsApp/",
        description:
          "I created this project to show how to build a portfolio website",
        imageUrl:
          "https://res.cloudinary.com/dgcysjarm/image/upload/v1668014030/samples/ecommerce/analog-classic.jpg",
      },
      {
        name: "project 3",
        link: "https://github.com/Venkatesh3696/commentsApp/",
        description:
          "I created this project to show how to build a portfolio website",
        imageUrl:
          "https://res.cloudinary.com/dgcysjarm/image/upload/v1668014038/samples/people/bicycle.jpg",
      },
    ],
  };
  0;

  onProjectNameChange = (event) => {
    this.setState({ projectName: event.target.value });
  };
  onProjectLinkChange = (event) => {
    this.setState({ projectLink: event.target.value });
  };
  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { projectName, projectLink, description, projectsList } = this.state;

    const projectDetails = {
      name: projectName,
      link: projectLink,
      description: description,
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1668014040/samples/ecommerce/leather-bag-gray.jpg",
    };
    const newList = [...projectsList, projectDetails];
    this.setState({ projectsList: newList });
  };

  render() {
    const { projectName, projectLink, description, projectsList } = this.state;
    return (
      <div className="app-container">
        <div className="header">
          <h1>Madelyn Torff</h1>
          <ul className="list-container">
            <li className="list-item">
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div id="about" className="section-1">
          <div className="details-container">
            <p className="designation">UI/UX DESIGNER</p>
            <h1>Hello,my name is Madelyn Torff</h1>
            <p>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <div className="buttons-container">
              <a href="#projects">Projects</a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/venkatesh-pentakota/"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="image-container">
            <img
              alt="profile"
              className="profile-image"
              src="https://res.cloudinary.com/dgcysjarm/image/upload/v1704436288/attachment_cdidiq.png"
            />
          </div>
        </div>
        <img
          alt="wave"
          src="https://res.cloudinary.com/dgcysjarm/image/upload/v1704437244/Vector_b8iprz.png"
        />
        <div className="add-project-section">
          <h1>Add Project</h1>
          <form onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="project-name">
              Project Name
            </label>
            <input
              onChange={this.onProjectNameChange}
              value={projectName}
              className="input"
              id="project-name"
              type="text"
            />
            <label className="label" htmlFor="project-name">
              Project Link
            </label>
            <input
              onChange={this.onProjectLinkChange}
              value={projectLink}
              className="input"
              id="project-link"
              type="text"
            />
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              onChange={this.onDescriptionChange}
              className="input"
              type="text-box"
              rows="4"
              cols="50"
              value={description}
            ></textarea>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div id="projects" className="projects-container">
            <h1>Projects</h1>
            {projectsList.map((projectDetails) => (
              <Project details={projectDetails} />
            ))}
          </div>
        </div>
        <footer id="contacts" className="footer">
          <ul className="contacts-container">
            <a href="https://www.linkedin.com/in/venkatesh-pentakota/">
              <li>
                <FaLinkedin />
              </li>
            </a>
            <a href="https://www.instagram.com/venkatesh__v__">
              <li>
                <FaInstagram />
              </li>
            </a>
            <a href="mailto: venkateshpentakota888@gmail.com">
              <li>
                <MdEmail />
              </li>
            </a>
          </ul>
          <p>Copyright © 2024. All rights reserved</p>
          <img
            alt="wave"
            className="footer-wave"
            src="https://res.cloudinary.com/dgcysjarm/image/upload/v1704437244/Vector_b8iprz.png"
          />
        </footer>
      </div>
    );
  }
}

export default Home;
