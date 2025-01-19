import { motion } from "framer-motion";
import { Cat } from "lucide-react";

const stats = [
  { value: "100K+", label: "Active Users" },
  { value: "$50M+", label: "Total Volume" },
  { value: "0.001s", label: "Transaction Time" },
];

export const Stats = () => {
  return (
    <div className="relative py-24 bg-gradient-to-br from-purple-dark to-purple-secondary overflow-hidden">
      {/* Floating cats */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            x: ["0%", "3%", "0%"],
            y: ["0%", "-3%", "0%"],
            opacity: 0.1
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6
          }}
        >
          <Cat size={24} className="text-purple-light transform -rotate-12" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-center bg-purple-dark/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-primary/20"
            >
              <motion.div 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ delay: index * 0.3, type: "spring" }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <motion.div 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ delay: index * 0.4, type: "spring" }}
                className="text-purple-light"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};