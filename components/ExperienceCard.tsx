import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-24 h-24 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center"
        src={
          experience?.companyImage
            ? urlFor(experience?.companyImage)?.url()
            : ""
        }
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Software Engineer</h4>
        <p className="font-bold text-xl mt-1">Microsoft</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            totam.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            totam.
          </li>
        </ul>
      </div>
    </article>
  );
}
