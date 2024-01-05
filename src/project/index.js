import "./index.css";
// import meditation.jpg  from '../../public/images'

const Project = (props) => {
  const { details } = props;
  const { name, link, description, imageUrl } = details;
  return (
    <li className="project-container">
      <div className="project-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <a className="project-link" href={link} target="blank">
          View Project
        </a>
      </div>
      <img className="project-image" src={imageUrl} alt="project" />
    </li>
  );
};

export default Project;
