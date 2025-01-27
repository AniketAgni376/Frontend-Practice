import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import photo from "../assets/images/photo.png"; // Import the image explicitly
import bcPhoto from "../assets/images/banner-circle.png";
import { FaLightbulb, FaTools, FaRocket } from "react-icons/fa"; // Icons for cards
import LocomotiveScroll from 'locomotive-scroll';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track the clicked item
  const underlineRef = useRef(null); // Ref for the green underline
  const headingsRef = useRef([]); // Ref for top headings animation
  const graphicRef = useRef(null); // Ref for top graphic animation
  const cardRefs = useRef([]); // Ref for btm cards animation

  const imagePaths = [photo]; // Use the imported image paths
  const menuItems = ["Home", "About", "Service", "Contact"]; // Menu items
  
  // Function to handle hover animation
  const handleMouseEnter = (index, element) => {
    const rect = element.getBoundingClientRect(); // Get element's position and dimensions
    gsap.to(underlineRef.current, {
      left: rect.left + window.scrollX - element.offsetParent.offsetLeft,
      width: rect.width,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Function to reset the underline if no item is clicked
  const handleMouseLeave = () => {
    if (activeIndex === null) {
      gsap.to(underlineRef.current, {
        width: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  // Function to handle static underline on click
  const handleClick = (index, element) => {
    const rect = element.getBoundingClientRect();
    setActiveIndex(index); // Set the clicked item's index
    gsap.to(underlineRef.current, {
      left: rect.left + window.scrollX - element.offsetParent.offsetLeft,
      width: rect.width,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    // Animate headings
    headingsRef.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, delay: index * 0.2, duration: 0.8, ease: "power2.out" }
      );
    });

    // Animate graphical elements
    gsap.to(graphicRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    // Animate cards on load
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, delay: index * 0.2, duration: 0.8, ease: "power2.out" }
      );
    });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Navbar */}
      <div className="pt-5 flex justify-between items-center py-6">
        {/* Logo Section */}
        {imagePaths.map((path, index) => (
          <img key={index} src={path} alt={`Image ${index + 1}`} className="h-4 ml-5 w-auto" />
        ))}

        {/* Navigation Links */}
        <div className="links flex gap-10 text-sm mr-20 relative">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item relative cursor-pointer text-gray-300 ${
                activeIndex === index ? "font-bold" : ""
              }`}
              onMouseEnter={(e) => handleMouseEnter(index, e.currentTarget)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(index, e.currentTarget)}
            >
              {item}
            </div>
          ))}

          {/* Green Underline */}
          <div
            ref={underlineRef}
            className="absolute bottom-[-4px] h-1 bg-green-500"
            style={{
              position: "absolute",
              bottom: "-4px",
              left: 0,
              width: 0,
            }}
          ></div>
        </div>
      </div>

      {/* Top Section */}
      <div className="top flex justify-between items-center gap-10 py-16">
        {/* Left Side Headings */}
        <div className="text-left flex-1">
          <h3 className="text-lg text-gray-500 mb-4" ref={(el) => (headingsRef.current[0] = el)}>
            WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mb-2" ref={(el) => (headingsRef.current[1] = el)}>
            We Make The
          </h1>
          <h1 className="text-4xl font-bold text-green-500 mb-4" ref={(el) => (headingsRef.current[2] = el)}>
            Best IT Solutions
          </h1>
          <h3 className="text-md text-gray-500" ref={(el) => (headingsRef.current[3] = el)}>
            If you are looking for an agency to help you get the right talents as per your needs,
            you’ve come to the right place. We can help you take your business to the next level.
          </h3>
        </div>

        {/* Right Side Graphics */}
        <div className="graphics relative w-1/2 flex justify-center items-center">
        <img src={"bgPhoto"} alt="background" className="w-20 h-20 rounded-full" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="btm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[
          { title: "Innovation", desc: "We create innovative solutions for complex challenges.", icon: <FaLightbulb size={40} /> },
          { title: "Tools", desc: "Get the best tools to maximize your productivity.", icon: <FaTools size={40} /> },
          { title: "Launch", desc: "We help launch your projects to success.", icon: <FaRocket size={40} /> },
        ].map((card, index) => (
          <div
            key={index}
            className="card bg-gray-100 p-6 shadow-lg rounded-md flex items-center gap-4"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="icon text-green-500">{card.icon}</div>
            <div className="text">
              <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
              <h3 className="text-md text-gray-500">{card.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
