import { motion } from "framer-motion";
import { KittenCanvas } from "./KittenCanvas";
import { UserButton } from "@civic/auth/react";
import { useUser } from '@civic/auth/react';
import { Link } from 'react-router-dom';
import { Header } from "./header";

export const Hero = () => {
  const { user } = useUser();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-dark via-purple-secondary to-purple-primary overflow-hidden">
      {/* Background Kitten Canvas */}
      <KittenCanvas />

      <Header />

      {/* Centered Hero content */}
      {!user ? (<div className="absolute inset-0 flex items-center justify-center z-10">
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
      </div>)
        : (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold text-white mb-6"
              >
                Welcome Back {user.name}!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-purple-light mb-8 max-w-2xl mx-auto"
              >
                Head to your dashboard to manage your crypto portfolio, check your DeFi services, and explore new opportunities in the blockchain space
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-4"
              >
                <Link
                  to="/dashboard"
                  className="bg-purple-primary hover:bg-purple-vivid text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Go to Dashboard
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-purple-primary hover:border-purple-vivid text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  View Services
                </Link>
              </motion.div>
            </div>
          </div>

        )}
    </div>
  );
};