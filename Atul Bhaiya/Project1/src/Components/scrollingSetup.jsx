import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Locomotive Scroll styles

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });

    // Sync Locomotive Scroll with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(mainRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: mainRef.current.style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger and Locomotive Scroll on window updates
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Cleanup on component unmount
    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };
  }, []);

  return (
    <div id="main" ref={mainRef} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
