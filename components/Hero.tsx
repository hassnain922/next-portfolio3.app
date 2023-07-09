"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

// import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
   
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Hasnain 
        </h1>
        <p className="hero__subtitle">
          DevOps Engineer.I am profound in infrastructure and implementing scalable and highly available cloud architectures that optimize performance, security, and cost-efficiency.
        </p>
        <CustomButton
          title="About Me"
          containerStyles=" bg-indigo-900 text-2xl text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
         
      </div>  
      <div className="hero__image-container">
         <div className="hero__image">
           <Image src="/hero.jpg" alt="hero" fill className="object-contain" />
         </div>
      </div>
      </div>
   
  );
};

export default Hero;