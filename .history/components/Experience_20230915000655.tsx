import React from "react";
import SectionTitle from "./SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
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
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#112240', color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={experience.date}
            iconStyle={{ background: "#112240", color: "#fff" }}
            icon={experience.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-titleFont font-semibold tracking-wider">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
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
