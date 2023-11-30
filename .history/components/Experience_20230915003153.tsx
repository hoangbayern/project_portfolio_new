import React from "react";
import SectionTitle from "./SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" />
      <VerticalTimeline>
        {experiencesData.map((experience) => (
          <VerticalTimelineElement key={experience.id}
            contentStyle={{ background: '#112240', color: "#fff", border: "1px solid rgb(100 255 218 / 1)" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(100 255 218 / 1)" }}
            date={experience.date}
            iconStyle={{ background: "#112240", color: "#fff" }}
            icon={experience.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-titleFont font-semibold tracking-wider">
              {experience.title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle text-sm">{experience.location}</h5>
            <p>
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
