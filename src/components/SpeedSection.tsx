import { motion } from "framer-motion";
import { Zap, Cat } from "lucide-react";

export const SpeedSection = () => {
  return (
    <div className="relative py-24 bg-gradient-to-br from-purple-dark to-purple-secondary overflow-hidden">
      {/* Floating cats in background */}
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
            x: ["0%", "2%", "0%"],
            y: ["0%", "-2%", "0%"],
            opacity: 0.1
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          <Cat size={24} className="text-purple-light transform rotate-45" />
        </motion.div>
      ))}
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Zap className="w-12 h-12 text-purple-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Lightning Fast Speed</h2>
          <p className="text-purple-light max-w-2xl mx-auto">
            Experience blockchain transactions at the speed of light. Our advanced infrastructure ensures minimal latency and maximum throughput.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Transaction Speed", value: "0.001s" },
            { label: "Network Uptime", value: "99.99%" },
            { label: "Throughput", value: "100k TPS" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-purple-dark/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-primary/20"
            >
              <h3 className="text-3xl font-bold text-purple-primary mb-2">{stat.value}</h3>
              <p className="text-purple-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};