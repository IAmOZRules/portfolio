import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  const demoStyles = style({
    backgroundColor: theme.name === "dark" ? "#2AFF00" : "#D500FF",
    color: theme.name === "dark" ? null : "white",
    ":hover": {
      boxShadow: `0 0 10px ${theme.name === "dark" ? "#2AFF00" : "#D500FF"}`,
    },
    transition: "0.2s ease-in",
    transform: "boxShadow",
  });

  const githubStyles = style({
    ":hover": {
      boxShadow: `0 0 10px ${theme.name === "dark" ? "#2AFF00" : "#D500FF"}`,
    },
    transition: "0.2s ease-in",
    transform: "boxShadow",
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p
              className="repo-name"
              style={{ color: theme.text, justifyContent: "space-between" }}
            >
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="leenks">
            <button
              className="leenk-btn github-btn"
              {...githubStyles}
              style={!repo.demo ? { width: "100%" } : null}
              onClick={() => openRepoinNewTab(repo.github)}
            >
              <i className="font fab fa-github" />
              GitHub
            </button>
            {repo.demo && (
              <button
                className="leenk-btn demo-btn"
                {...demoStyles}
                onClick={() => openRepoinNewTab(repo.demo)}
              >
                <i class="font fas fa-arrow-right"></i>Demo
              </button>
            )}
          </div>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
