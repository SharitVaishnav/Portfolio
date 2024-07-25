import MainProjectCard from "./MainProjectCard";
import { mainData } from "../data";
import { motion } from "framer-motion";

const Projects = () => {

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        transition={{ delay: 0.5, duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="projects"
        className="my-[100px] md:my-0 mx-auto py-[100px] md:mx-0 max-[640px]:w-[80%]"
      >
        <div className="flex items-center justify-start relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-3xl max-[640px]:text-2xl text-primaryText font-bold">
          <h2 className="text-slate-200">Some Things I've Built</h2>
          <div className="block sm:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px] "></div>
          <div className="hidden sm:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] ml-[20px]"></div>
        </div>

        <ul className="list-none p-0 m-0 w-full">
          {mainData &&
            mainData.map((project, idx) => (
              <MainProjectCard
                key={idx}
                project={project}
                idx={idx}
                length={mainData.length}
              />
            ))}
        </ul>
      </motion.section>
    </>
  );
};

export default Projects;