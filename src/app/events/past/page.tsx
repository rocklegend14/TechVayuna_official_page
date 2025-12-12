import React from "react";

import EventPage from "@/app/components/event-page";

const events = [
  {
    title: "CHRONOS",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/chronos.jpg",
    href: "/events/chronos",
    description: "Facts and theories about time travelling",
  },
  {
    title: "PHANTOM SHOTS",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/phantom.jpg",
    href: "/events/phantom-shots",
    description: "Photoshop and ethical hacking sessions",
  },
  {
    title: "CYBER CHUNK 1.0",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/1.0cyberchunk.jpg",
    href: "/events/cyber-chunk-1",
    description: "Latest cybersecurity trends and career paths",
  },
  {
    title: "TECHNOWIZ 1.0",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/1.0technowiz.jpg",
    href: "/events/technowiz-1",
    description: "Decentralised Machine Learning webinar",
  },
  {
    title: "CYBER CHUNK 2.0",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/2.0cyberchunk.jpg",
    href: "/events/cyber-chunk-2",
    description: "Future of cybersecurity insights",
  },
  {
    title: "TECHNOWIZ 2.0",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/2.0technoviz.jpg",
    href: "/events/technowiz-2",
    description: "Data Science and Machine Learning event",
  },
  {
    title: "CODE RED 1.0",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/1.0codered.jpg",
    href: "/events/code-red-1",
    description: "Web3 technology and AI essentials",
  },
  {
    title: "CODE RED 2.0",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/2.0codered.jpg",
    href: "/events/code-red-2",
    description: "Cutting-edge AI topics presentations",
  },
  {
    title: "APP FUSION",
    image:
      "https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/appfusion.jpg",
    href: "/events/app-fusion",
    description: "Frontend development competition",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Past events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventPage images={[event.image]} key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
