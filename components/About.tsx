import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/323876361_650577143484284_4162454874438890280_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=e5F2D0RT0BYAX8hWwAs&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfDN3mXibQrclxC215z43YRT5p6gKpv71IbucVK2IE0IBg&oe=64C085E5"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-50 md:h-60 xl:w-[300px] xl:h-[400px] "
      />

      <div className="space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">Little</span>{" "}
          Background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          excepturi ad suscipit, eveniet, ipsa provident modi sint quae fuga
          sunt facere illum reprehenderit rem alias. Excepturi saepe ad totam
          autem. Amet voluptate aperiam sequi facere eveniet magnam,
          praesentium, sunt suscipit explicabo alias voluptatum ut pariatur.
          Officiis dicta hic officia eos perferendis iste maxime voluptas quos
          pariatur assumenda impedit, nisi velit sint ex facere temporibus, sed
          expedita reprehenderit a quam, quae perspiciatis exercitationem.
          Consectetur saepe harum hic suscipit quae animi nobis maxime, iste
          laudantium ad ea? Architecto labore at fuga natus aspernatur
          obcaecati, expedita quidem consequuntur minima molestias, veniam
          aliquam sequi!😀
        </p>
      </div>
    </motion.div>
  );
}
