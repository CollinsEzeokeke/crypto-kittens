import { motion } from "framer-motion";
import { Cat } from "lucide-react";

export const KittenCanvas = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none">
      {[...Array(48)].map((_, i) => {
        const randomX = Math.random() * 100; // Use full width
        const randomY = Math.random() * 100; // Use full height
        const randomDelay = Math.random() * 4;
        const randomDuration = 3 + Math.random() * 3;
        const randomFloatRange = 10 + Math.random() * 20;
        const randomSize = 16 + Math.floor(Math.random() * 24);
        const randomRotation = -15 + Math.floor(Math.random() * 30);
        const randomPadding = Math.floor(Math.random() * 16); // Random padding for better scattering

        return (
          <motion.div
            key={i}
            className={`absolute p-${randomPadding} transform`}
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              y: [0, randomFloatRange, 0],
              opacity: 0.2,
              scale: 1
            }}
            transition={{
              y: {
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: randomDelay
              },
              opacity: {
                duration: 1,
                delay: randomDelay
              },
              scale: {
                duration: 1,
                delay: randomDelay
              }
            }}
          >
            <Cat 
              size={randomSize} 
              className={`text-purple-light transform rotate-${randomRotation} hover:opacity-50 transition-opacity duration-300`}
            />
          </motion.div>
        );
      })}
    </div>
  );
};