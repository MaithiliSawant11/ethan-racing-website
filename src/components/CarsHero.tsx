'use client';

import { motion } from "framer-motion";

export default function CarsHero() {
  return (
    <section className="h-[60vh] flex flex-col justify-center items-center text-center">

      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OUR CARS
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Evolution of Ethan Racing Machines
      </motion.p>

      {/* Optional line animation */}
      <motion.div
        className="w-24 h-1 bg-white mt-6"
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />

    </section>
  );
}