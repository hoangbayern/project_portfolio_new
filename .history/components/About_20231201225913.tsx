import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p className="text-lg"> 
            Hello! My name is{" "}
            <span className="text-textGreen">Ha Huy Hoang</span> and I&apos;m passionate about creating things that thrive on the internet. With a strong inclination towards logical thinking and programming, I embarked on a journey into the field of Information Technology at university. Throughout my academic pursuits and internships, I&apos;ve had the opportunity to engage in various projects, ranging from crafting personal websites to developing e-commerce web applications.
            I firmly believe that continuous learning is integral to personal development. Hence, I actively seek opportunities to enhance my knowledge, staying abreast of the latest trends and cutting-edge technologies in web development.

          </p>
          <p className="text-lg">
            <span className="italic text-textGreen">When I&apos;m not coding</span>, I enjoy
            playing games, watching movies, editing video and playing soccer. I also
            enjoy <span className="font-medium">learning new things</span>. I am
            currently learning about{" "}
            <span className="font-medium">imformation technology</span>.
            I&apos;m also learning how to play the piano and flute.
          </p>
          <p className="text-lg">Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Laravel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Docker
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg object-contain"
                src={profileImg}
                alt="profileImg"
              />
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-72 h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
