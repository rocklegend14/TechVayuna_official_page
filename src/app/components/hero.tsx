"use client";

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExampleCarouselImage({ text }: { text: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#222',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        borderRadius: 16,
      }}
    >
      {text}
    </div>
  );
}

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text=''/>
        <img src="https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/2.0codered.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="" />
        <img src="https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/2.0codered.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="" />
        <img src="https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/2.0codered.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default function Hero() {
  return (
    <div className="relative bg-[#04132e] text-white md:p-8 h-screen">
      <div
        className="absolute -top-24 md:top-0 left-0 z-0 h-full pointer-events-none w-sm md:w-md"
        style={{
          background: "radial-gradient(circle at left, #7E3BB2 0%, transparent 50%)"
        }}
      />
      <div className="container flex flex-col items-center justify-center w-full h-full mx-auto">
        <ControlledCarousel />
      </div>
      {/* Your content here */}
    </div>
  );
}