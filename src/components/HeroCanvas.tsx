"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageSeq] = useState({ frame: 1 });
  const frameCount = 90;
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());

  const currentFrame = (index: number) =>
    `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

  const loadImage = (frame: number) => {
    if (!imageCache.current.has(frame)) {
      const img = new Image();
      img.src = currentFrame(frame);

      img.onload = () => {
        imageCache.current.set(frame, img);
        if (frame === imageSeq.frame) renderFrame();
      };
    }
  };

  const renderFrame = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const img = imageCache.current.get(imageSeq.frame);
    if (img && img.complete && img.naturalWidth > 0) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const x = (canvas.width - img.width * ratio) / 2;
      const y = (canvas.height - img.height * ratio) / 2;

      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        x,
        y,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    // Clean up any existing ScrollTriggers first
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Reset frame to initial state
    imageSeq.frame = 1;
    
    // Load the first frame
    loadImage(1);

    // Create new ScrollTrigger animation
    const animation = gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvasRef.current?.parentElement,
        scrub: 1,
        pin: canvasRef.current?.parentElement,
        start: "top top",
        end: `+=${window.innerHeight * 5}`,
        onUpdate: () => {
          loadImage(imageSeq.frame + 1);
          renderFrame();
        },
      },
      onUpdate: renderFrame,
    });

    // Store the animation reference for cleanup
    animationRef.current = animation;

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      // Kill all ScrollTriggers as a fallback
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []); // Empty dependency array to run only once

  // Additional cleanup on unmount
  useEffect(() => {
    return () => {
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(st => st.kill());
      
      // Clear image cache to free memory
      imageCache.current.clear();
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  );
};

export default HeroCanvas;