import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Inter } from "next/font/google";
import Link from "next/link";
import WorkExperience from "../components/WorkExperience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
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
  );
}
