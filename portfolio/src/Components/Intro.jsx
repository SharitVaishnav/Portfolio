import Profile from "../profile.jpeg";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div id = "home" className="flex flex-wrap-reverse gap-10 p-40 max-[640px]:p-5 max-[640px]:pt-24 w-full max-[640px]:justify-center items-center mx-auto justify-between">
        <div className="flex flex-col w-[50%]  max-[640px]:w-[100%] max-[640px]:justify-center max-[640px]:items-center">
            <p className="text-blue1  text-md font-mono font-normal tracking-wider">Hi, my name is</p>
            <h1 className="font-bold font-fontHeading text-5xl text-slate-200 mt-2 max-[640px]:text-2xl">Sharit Vaishnav.</h1>
            <h1 className="font-bold font-fontHeading text-5xl text-slate-400 mt-1 max-[640px]:text-2xl">Full stack Web</h1>
            <h1 className="font-bold font-fontHeading text-5xl text-slate-400 max-[640px]:text-2xl">Developer</h1>
            <p className="text-slate-500 font-fontParagraph font-semibold mt-2 max-[640px]:text-base max-[640px]:text-center">I'm passionate full stack web developer and machine learning enthusiast from Madhya Pradesh, India</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-[15rem] h-[15rem] max-[640px]:w-[18rem] max-[640px]:h-[18rem]"
        >
          <div
            className="w-full h-full rounded-custom animate-morph border-2 border-blue1 bg-no-repeat"
            style={{
              backgroundImage: `url(${Profile})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></div>
        </motion.div>
      </div>
  );
};

export default Intro;