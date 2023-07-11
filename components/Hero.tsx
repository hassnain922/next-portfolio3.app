"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

// import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
   
  }

  return (
    <main className="max-w-4xl mx-auto" >
    <section className="hero">
      <div className=" sm:w-1/2">
        <h1 className="hero__title">
          Hasnain 
        </h1>
        <p className="hero__subtitle">
          DevOps Engineer.I am profound in infrastructure and implementing scalable and highly available cloud architectures that optimize performance, security, and cost-efficiency.
        </p>
        <CustomButton
          title="Hire Me"
          containerStyles=" bg-indigo-900 text-2xl text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
              
      </div>  
      {/* <div className="hero__image-container">
         <div className="hero__image">
           <Image src="/hero.jpg" alt="hero" fill className="object-contain" />
         </div>
      </div> */}
       <Image src="/hero.jpg" alt="hero"  className="w-1/2" width={500} height={55} />

      </section>
      </main>
   
  );
};

export default Hero;