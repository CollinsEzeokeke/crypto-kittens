import { motion } from "framer-motion";
import { Shield, Zap, RefreshCw, Cat } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with advanced encryption protocols",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant transactions with minimal gas fees",
  },
  {
    icon: RefreshCw,
    title: "Sustainable",
    description: "Eco-friendly blockchain solution for a better future",
  },
];

export const Features = () => {
  return (
    <div className="relative py-24 bg-purple-dark overflow-hidden">
      {/* Background cats */}
      {[...Array(5)].map((_, i) => (
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
            y: ["0%", "2%", "0%"],
            opacity: 0.1
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
        >
          <Cat size={28} className="text-purple-light transform rotate-45" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Key Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-light"
          >
            Powered by innovative technology
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-secondary/20 to-purple-primary/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-primary/20 hover:border-purple-primary/40 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-12 h-12 text-purple-primary mb-6 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-purple-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};