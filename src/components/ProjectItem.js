import React from "react";

function ProjectItem({ name, description, dueDate, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Due Date: {dueDate}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
