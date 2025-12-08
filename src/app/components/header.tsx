'use client'

import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 w-full transition-colors duration-300 z-50 ${
                scrolled
                    ? "bg-[#04132e]/80 text-white backdrop-blur-md shadow-md"
                    : "bg-[#04132e] text-white"
            }`}
        >
            <div className="flex items-center justify-between px-4 mx-auto">
                <a href="/" aria-label="TechVayuna Home">
                    <img
                        src="https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/tv.png"
                        alt="TechVayuna Logo"
                        className="w-24 md:w-32"
                    />
                </a>
                <div className="flex justify-end flex-1">
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-white rounded-md hover:bg-gray-700"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                    <nav aria-label="Main navigation" role="navigation">
                        <ul className="flex-row justify-end hidden space-x-8 text-xl md:flex">
                            <li>
                                <a href="#about" className="text-white text-decoration-none hover:text-gray-400">
                                    About
                                </a>
                            </li>
                            <li><a href="/events" className="text-white text-decoration-none hover:text-gray-400">Events</a></li>
                            <li><a href="/team" className="text-white text-decoration-none hover:text-gray-400">Our Team</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none hover:text-gray-400">Contact</a></li>
                            <li><a href="/join-us" className="text-white text-decoration-none hover:text-gray-400">Join Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed inset-y-0 right-0 w-full max-w-sm bg-[#04132e] p-8 overflow-y-auto`}>
                <div className="flex justify-end mb-8">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-white rounded-md hover:bg-gray-700"
                        title="Close menu"
                        aria-label="Close menu"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <nav aria-label="Mobile navigation" role="navigation">
                    <ul className="space-y-4">
                        <li>
                            <a href="/about" className="block text-white text-decoration-none hover:text-gray-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/events" className="block text-white text-decoration-none hover:text-gray-400">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="/team" className="block text-white text-decoration-none hover:text-gray-400">
                                Our Team
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block text-white text-decoration-none hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/join-us" className="block text-white text-decoration-none hover:text-gray-400">
                                Join Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
