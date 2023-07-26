import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { sanityClient } from "@/sanity";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import WorkExperience from "../components/WorkExperience";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return domLoaded && pageInfo && socials && projects && experiences ? (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section className="snap-start" id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/357682458_179528281760870_7031147414443955512_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=MP2F5wqkMWgAX9mZLXa&_nc_oc=AQkeGwpnh1wulZqHQmRFnQbiG2kCnMo_mii2oPMPa3n5XBi7z5X66ou9sTMC2tMouzc&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfDuNHeJDWRBtVg2y-IzZRBPPumN2h12DE0vcFlUaML1Ug&oe=64C04809"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  ) : null;
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch the data here and assign it to the respective variables.
  const pageInfo: PageInfo = await sanityClient.fetch(groq`
  *[_type == "pageInfo"][0]
`);
  const experiences: Experience[] = await sanityClient.fetch(groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`);
  const skills: Skill[] = await sanityClient.fetch(groq`
  *[_type == "skill"]
`);
  const projects: Project[] = await sanityClient.fetch(groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`);
  const socials: Social[] = await sanityClient.fetch(groq`
  *[_type == "social"]
`);

  try {
    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
