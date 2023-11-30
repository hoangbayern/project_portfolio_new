import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />

      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href={project.hash.linkWeb}
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={project.imageUrl}
                  alt={project.altImg}
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  {project.lable}
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
                {project.description}
              </p>
              {project.tags && (
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  {project.tags.map((tag, index)=> (
                    <li key={index} className="bg-black/[0.7] px-3 py-1 uppercase text-white
                    text-[0.7rem] rounded-full">{tag}</li>
                  ))}
                </ul>
              )}
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href={project.hash.linkGit}
                  target="_blank"
                >
                  {project.icon.iconGit}
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href={project.hash.linkWeb}
                  target="_blank"
                >
                  {project.icon.iconWeb}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
