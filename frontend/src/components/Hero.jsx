import React, { useEffect, useState, useRef } from "react";
import { heroElements } from "../constants";
import "../index.css";

const Hero = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const videoRefs = heroElements.map(() => useRef(null));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement(
        (prevElement) => (prevElement + 1) % heroElements.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Pause all videos
    videoRefs.forEach((videoRef) => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    });

    // Play the current video
    if (videoRefs[currentElement].current) {
      const video = videoRefs[currentElement].current;
      video.load(); // Reload the video
      video.play(); // Start playing

      // Listen for the video's end and loop it
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
      });
    }
  }, [currentElement, videoRefs]);

  return (
    <>
      <div className="w-full h-[500px] sm:h-[756px] relative">
        <div className="video-container">
          {heroElements.map((element, index) => (
            <div
              key={index}
              className={`absolute w-full h-full  ${
                index === currentElement ? "visible" : "hidden"
              }`}
            >
              <div
                className={`video-slide w-full h-full video-element ${
                  index === currentElement ? "video-fade-in" : "video-fade-out"
                }`}
              >
                <video
                  ref={videoRefs[index]}
                  src={element.video}
                  title="Video BG"
                  autoPlay // Autoplay the video
                  muted
                  controls={false} // Hide video controls
                  style={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  className=" object-cover"
                />
              </div>

              <div
                className={`text-slide h-[40%] flex items-center justify-between absolute bottom-7 w-[45%] gap-3 z-10 ${
                  index === currentElement ? "text-fade-in" : "text-fade-out"
                }`}
              >
                <p className="font-semibold text-white sm:text-[35px] text-[20px] leading-snug tracking-wide md:text-[45px] w-[60%]">
                  {element.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
