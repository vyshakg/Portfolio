import React from "react";
import { ProjectContainerMore } from "../ui";

export default function More() {
  return (
    <ProjectContainerMore>
      <div>
        <h3
          style={{
            paddingTop: "1.3rem",
            paddingLeft: "2rem"
          }}
        >
          <a
            href="https://github.com/vyshakg/"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
            style={{
              textDecoration: "none",
              fontSize: "xx-large",
              color: "#e9edf3"
            }}
          >
            More In Github{" "}
            <i
              className="fab fa-github"
              style={{ color: "white", marginRight: "20px", fontSize: "28px" }}
            />
          </a>
        </h3>
      </div>
    </ProjectContainerMore>
  );
}
