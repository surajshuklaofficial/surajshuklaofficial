import { ENGINEERING, HERO } from "@/public";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className=" text-white py-20 h-screen flex-center">
      <div className="w-full px-40 flex flex-col md:flex-row items-center justify-center gap-20 -translate-y-1/3">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm Suraj Shukla
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            I'm pursuing Software Engineering at Delhi Technological University
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <Image
            src={ENGINEERING}  
            width={500}
            height={1000}
            alt="hero" 
            className="shadow-lg rounded"
          />
        </div>
      </div>
    </section>
  );
};
