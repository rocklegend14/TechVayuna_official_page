import React from "react";

export const Footer = () => {
  return (
    <div className="relative bg-[#04132e] text-white  overflow-hidden" id="contact">
      <img
      src='https://res.cloudinary.com/doou5hxlb/image/upload/v1752049599/Ellipse_4_mx09wy.png'        className="absolute w-full h-full  pointer-events-none z-0"
        alt="Background Ellipse"
      />
      <div className="relative z-50 md:p-16">
        <div className="flex flex-row justify-between text-2xl">
          {/* Menu */}
          <div className="font-bold">
            <ul className="space-y-3">
              <li className="pb-4">Menu</li>
              <li>
                <a href="/" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Our Team
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Events
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="font-bold">
            <ul className="space-y-3">
              <li className="pb-4">Contact</li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Email
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          {/* Address */}
          <div>
            <div className="pb-4 font-bold ">Address</div>
            <div className="">
              SRM Institute Of Science And Technology
              <br />
              Bharathi Salai, Ramapuram, Chennai,
              <br />
              Tamil Nadu 600089
            </div>
          </div>
          {/* Join Us */}
          <div className="p-4 ">
            <div className="pb-4 font-bold text-white">Join Us!</div>
            <form className="flex flex-row items-center  gap-2">
              <label
                htmlFor="footer-email"
                className="font-bold mr-8 text-white"
              >
                Email
              </label>
              <div className="flex items-center bg-[#B28CE4]/50 rounded-full overflow-hidden">
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  placeholder=""
                  className="flex-grow px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none"
                />
                <a
                  href="#"
                  className="bg-[#9747FF]/80 hover:bg-[#9747FF] text-white font-semibold px-6 py-2 transition-all duration-200 flex items-center justify-center rounded-full text-decoration-none hover:shadow-lg"
                >
                  SUBMIT
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
