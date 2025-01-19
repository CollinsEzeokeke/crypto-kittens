import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { KittenCanvas } from "./KittenCanvas";
import { UserButton } from "@civic/auth/react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-dark via-purple-secondary to-purple-primary overflow-hidden">
      {/* Background Kitten Canvas */}
      <KittenCanvas />
      
      {/* Wallet Connect Button */}
      <div className="absolute top-4 right-4 z-20">
        <UserButton />
        <Button 
          className="bg-purple-primary hover:bg-purple-vivid text-white font-bold py-2 px-4 rounded-full"
          onClick={() => console.log("Connect wallet clicked")}
        >
          Connect Wallet
        </Button>
      </div>
      
      {/* Centered Hero content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-6"
          >
            Next-Gen Blockchain Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-light mb-8 max-w-2xl mx-auto"
          >
            Revolutionizing the future of decentralized finance with cutting-edge technology and adorable companions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-purple-primary hover:bg-purple-vivid text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};