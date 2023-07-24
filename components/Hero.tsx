import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCircles from "./BgCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Tuhin Ahmed",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BgCircles />
      <img
        className="object-cover relative rounded-full h-32 w-32 mx-auto"
        src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/357682458_179528281760870_7031147414443955512_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=MP2F5wqkMWgAX9mZLXa&_nc_oc=AQkeGwpnh1wulZqHQmRFnQbiG2kCnMo_mii2oPMPa3n5XBi7z5X66ou9sTMC2tMouzc&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfDuNHeJDWRBtVg2y-IzZRBPPumN2h12DE0vcFlUaML1Ug&oe=64C04809"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
