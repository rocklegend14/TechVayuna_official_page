import React from "react";

export default function About() {
  return (
    <div className="relative bg-[#04132e] text-white md:pt-30 overflow-hidden -scroll-mt-32" id="about">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full mx-auto">
          <div className="flex flex-col  justify-center w-full h-full px-4 md:px-24">
            <div className="text-2xl md:text-7xl font-bold  mb-12">
              about us:
            </div>
            <p className="text-xl md:text-4xl text-justify">
              Welcome to TechVayuna club, where a squad of tech enthusiasts
              unites to turn wild ideas into reality! <br />
              <br />
              As a premier technical club, we are dedicated to empowering
              individuals like you with cutting-edge knowledge and hands-on
              experience in various technological domains. <br />
              <br />
              Whether you're an aspiring programmer, engineer, or tech
              enthusiast, our club offers a dynamic platform to delve into the
              latest technologies, coding challenges, and hands-on projects. But
              we don't stop there!
            </p>
          </div>

          <img
            src="https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/def.png"
            alt=""
            className="md:w-1/2 z-20"
          />
          <div
            className="absolute top-0  md:top-[-10] right-0 z-00 h-full pointer-events-none w-lg md:w-3xl"
            style={{
              background:
                "radial-gradient(circle at right, #ba5e85 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full h-full mx-auto">
          <div className="flex flex-col  justify-center w-full h-full px-4 md:px-24 z-20">
            <p className="text-xl md:text-4xl text-justify">
              But we understand that true success in the tech industry requires
              more than technical know-how alone. <br />
              <br />
              That's why Tech Vayuna places equal importance on developing
              essential soft skills that set you apart as a well-rounded
              professional. <br />
              <br />
              From effective communication and leadership to problem-solving and
              teamwork, we provide comprehensive training to enhance your
              personal and professional growth.
            </p>
          </div>

          <img
            src="https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/tables.png"
            alt=""
            className="md:w-1/2 ml-8"
          />
        </div>
      </div>
    </div>
  );
}
