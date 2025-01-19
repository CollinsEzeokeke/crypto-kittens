import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import { UserButton } from "@civic/auth/react";

export const Header = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(26, 31, 44, 0)", "rgba(26, 31, 44, 0.8)"]
  );

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white hover:text-purple-light transition-colors duration-300"
        >
          Crypto-Kittens
        </Link>
        
        <UserButton
          className="bg-purple-primary hover:bg-purple-vivid text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
        />
      </div>
    </motion.header>
  );
};