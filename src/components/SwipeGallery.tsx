"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SwipeGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[300px] overflow-hidden rounded-xl">

      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) next();
            if (info.offset.x > 100) prev();
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
}