import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { style } from "glamor";

function ExperienceAccordion(props) {
  const theme = props.theme;

  const experienceAccordStyle = style({
    ":hover": {
      boxShadow: `0 0 10px ${theme.accentColor}`,
    },
    transition: "0.2s ease-in",
    transform: "boxShadow",
  });

  return (
    <div className="experience-accord" {...experienceAccordStyle} >
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion>
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard
                      key={experience["id"]}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
