import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  Wallet,
  LineChart,
  Shield,
  Coins,
  ArrowRight,
  Gift,
} from "lucide-react";
import { Header } from './header';
import { motion } from 'framer-motion';

const serviceItems = [
  {
    title: "Crypto Trading",
    description: "Trade cryptocurrencies with advanced tools and real-time analytics",
    icon: <LineChart className="h-6 w-6" />,
    color: "bg-purple-primary/10",
  },
  {
    title: "Secure Wallet",
    description: "Store your digital assets safely with our encrypted wallet solution",
    icon: <Wallet className="h-6 w-6" />,
    color: "bg-purple-secondary/10",
  },
  {
    title: "Asset Protection",
    description: "Advanced security measures to protect your investments",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-purple-vivid/10",
  },
  {
    title: "Rewards Program",
    description: "Earn rewards and bonuses through our loyalty program",
    icon: <Gift className="h-6 w-6" />,
    color: "bg-purple-light/10",
  },
  {
    title: "DeFi Services",
    description: "Access decentralized finance protocols and earn yields",
    icon: <Coins className="h-6 w-6" />,
    color: "bg-purple-primary/10",
  },
];

const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-purple-dark p-8 animate-fade-in">
      <Header />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 mt-16"
        >
          <h1 className="text-4xl font-bold text-purple-light mb-2">Our Services</h1>
          <p className="text-muted-foreground">Explore our comprehensive crypto solutions</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-purple-dark border border-purple-primary/20 hover:border-purple-primary/40">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${service.color} p-3 rounded-lg`}>
                    {React.cloneElement(service.icon, { className: "text-purple-primary" })}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-light">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <button className="flex items-center text-purple-primary hover:text-purple-light transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-purple-dark via-purple-secondary to-purple-primary inline-block">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-purple-light mb-6">Join thousands of users already trading with us</p>
            <button className="bg-purple-primary hover:bg-purple-vivid text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Get Started Now
            </button>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default Services;