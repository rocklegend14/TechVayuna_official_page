import React from "react";

export default function Domain() {
  return (
    <div className="relative bg-[#04132e] md:p-8 min-h-screen ">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle,rgba(126, 59, 178, 1) 0%, rgba(255, 255, 255, 0) 44%)",
        }}
      />
      <div className="relative text-8xl text-white text-center py-24 z-50">
        OUR DOMAINS
      </div>
      <div className="flex flex-col space-y-20 z-50">
        <div className="flex flex-row px-90 space-x-32">
          <a
            href=""
            className="w-80 h-24 group transition-transform duration-300 bg-[#B28CE4] hover:bg-[#30084a] rounded-full py-4 px-12 text-center relative text-3xl font-bold text-white inline-flex items-center justify-center gap-2 text-decoration-none"
          >
            {/* Image is hidden by default, shown on hover */}
            <img
              src="https://res.cloudinary.com/doou5hxlb/image/upload/v1752038445/computer-icon_fxbxtj.svg"
              alt="Domain Icon"
              className="hidden group-hover:inline-block w-1/3 h-auto"
            />
            <span>TECHNICAL</span>
          </a>

          <a
            href=""
            className="w-80 h-24 group transition-transform duration-300 bg-[#B28CE4] hover:bg-[#30084a] rounded-full py-4 px-12 text-center relative text-3xl font-bold text-white inline-flex items-center justify-center gap-2 text-decoration-none"
          >
            <img
              src="https://res.cloudinary.com/doou5hxlb/image/upload/v1752038447/pencil-icon_i4ei8b.svg"
              alt="Domain Icon"
              className="hidden group-hover:inline-block w-1/3 h-auto"
            />
            DESIGN
          </a>
        </div>
        <div className="flex flex-row  px-110 space-x-8">
          <a
            href=""
            className="w-80 h-24 group transition-transform duration-300 bg-[#B28CE4] hover:bg-[#30084a] rounded-full py-4 px-12 text-center relative text-3xl font-bold text-white inline-flex items-center justify-center gap-2 text-decoration-none"
          >
            <img
              src="https://res.cloudinary.com/doou5hxlb/image/upload/v1752038445/search-icon_ztnbhc.svg"
              alt="Domain Icon"
              className="hidden group-hover:inline-block transition duration-500 w-1/3 h-auto"
            />
            R & D
          </a>
          <a
            href=""
            className="w-80 h-24 group transition-transform duration-300 bg-[#B28CE4] hover:bg-[#30084a] rounded-full py-4 px-12 text-center relative text-3xl font-bold text-white inline-flex items-center justify-center gap-2 text-decoration-none"
          >
            <img
              src="https://res.cloudinary.com/doou5hxlb/image/upload/v1752038446/speaker_wf7hej.svg"
              alt="Domain Icon"
              className="hidden group-hover:inline-block w-1/3 h-auto"
            />
            P R
          </a>
        </div>
        <div className="flex flex-row space-x-32 px-90">
          <a
            href=""
            className="w-80 h-24 group transition-transform duration-300 bg-[#B28CE4] hover:bg-[#30084a] rounded-full py-4 px-12 text-center relative text-3xl font-bold text-white inline-flex items-center justify-center gap-2 text-decoration-none"
          >
            <img
              src="https://res.cloudinary.com/doou5hxlb/image/upload/v1752038446/document-icon-1_y0tmlb.svg"
              alt="Domain Icon"
              className="hidden group-hover:inline-block w-1/3 h-auto"
            />
            CONTENT
          </a>
          <a
            href=""
            className="w-80 h-24 group transition-transform duration-300 bg-[#B28CE4] hover:bg-[#30084a] rounded-full py-4 px-12 text-center relative text-3xl font-bold text-white inline-flex items-center justify-center gap-2 text-decoration-none"
          >
            <img
              src="https://res.cloudinary.com/doou5hxlb/image/upload/v1752038445/star-icon-1_adp50y.svg"
              alt="Domain Icon"
              className="hidden group-hover:inline-block w-1/3 h-auto"
            />
            MEDIA
          </a>
        </div>
      </div>
    </div>
  );
}
