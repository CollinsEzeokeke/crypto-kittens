import { motion } from "framer-motion";
import { Shield, Cat } from "lucide-react";

export const TrustSection = () => {
  return (
    <div className="relative py-24 bg-gradient-to-br from-purple-secondary to-purple-dark overflow-hidden">
      {/* Animated trust indicators */}
      {[...Array(6)].map((_, i) => (
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
            y: ["0%", "3%", "0%"],
            opacity: 0.1
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        >
          <Cat size={20} className="text-purple-light transform -rotate-12" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Shield className="w-12 h-12 text-purple-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Millions</h2>
          <p className="text-purple-light max-w-2xl mx-auto">
            Built on a foundation of security and transparency, our platform is trusted by users worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-dark/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-primary/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
            <p className="text-purple-light">
              Advanced encryption protocols and multi-layer security measures ensure your assets are always protected.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-dark/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-primary/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Transparent Operations</h3>
            <p className="text-purple-light">
              Every transaction is verifiable on the blockchain, ensuring complete transparency and trust.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};