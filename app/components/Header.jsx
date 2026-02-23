import Image from "next/image";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

/* ------------------ Motion Variants ------------------ */
const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.1,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(34,197,94,0.4)) drop-shadow(0 0 16px rgba(34,197,94,0.2))",
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
  tap: { scale: 0.95 },
};

const roles = [
  "Backend Developer",
  "Node.js Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
];

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/sahilkourav_" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sahilkourav" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/sahilkourav_",},
];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative w-full py-24 md:py-24 px-[5%] lg:px-[10%] overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mt-5 mx-auto text-center space-y-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
          <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-700 dark:text-gray-200">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sahil Kourav
        </h1>

        {/* Typing Role */}
        <h2 className="text-2xl lg:text-3xl font-semibold flex justify-center items-center">
          <span className="bg-gradient-to-r from-gray-600 to-neutral-500 dark:from-gray-400 dark:to-neutral-300 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="ml-1 w-0.5 h-[1em] bg-gray-600 dark:bg-gray-400 animate-pulse" />
        </h2>

        {/* Description */}
        <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I build robust server-side applications and REST APIs using
          Node.js, Express, and MongoDB. Focused on scalable architecture,
          clean code, and efficient database design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
          <a
            href="#contact"
            className="px-20 md:px-14 py-2 rounded-full bg-gray-800 text-white flex items-center gap-3"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="px-20 md:px-14 py-2 rounded-full border border-gray-500 bg-white dark:text-black flex items-center gap-2"
          >
            My Resume
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl pt-4">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;