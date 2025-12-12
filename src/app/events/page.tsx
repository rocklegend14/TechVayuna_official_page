import React from "react";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";

function App() {
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center min-h-screen bg-gradient-to-b from-[#04132E] via-[#2B0B3A] to-[#3A1829]">
      <main className="flex-grow container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Our Upcoming Events
        </h1>

        <div className="bg-purple-200 text-purple-900 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <img
            src="https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/appfusion.jpg"
            alt="Event"
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">App fusion</h2>
            <p className="mb-4 text-lg">
              A frontend dev contest with three rounds, challenging participants
              to recreate designs, judged on accuracy, functionality, code, and
              creativity.
            </p>
            <div className="flex items-center text-sm mb-2">
              <MapPin size={20} className="mr-2" />
              <span>SRM Institute Of Science And Technology, Ramapuram</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock size={20} className="mr-2" />
              <span>12-04-2024</span>
            </div>
          </div>
        </div>
      </main>

      <Link href="/events/past">
        <button
          className="bg-purple-500 text-white rounded-full p-4"
          type="button"
        >
          Past Events
        </button>
      </Link>
    </div>
  );
}

export default App;
