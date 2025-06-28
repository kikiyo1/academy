import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Rp 299.000",
    period: "/bulan",
    features: [
      "Akses 50+ kursus",
      "Video HD quality",
      "Forum diskusi",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "Rp 499.000",
    period: "/bulan",
    features: [
      "Akses semua kursus",
      "1-on-1 mentoring",
      "Sertifikat resmi",
      "Priority support",
      "Offline download"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Rp 999.000",
    period: "/bulan",
    features: [
      "Unlimited access",
      "Custom learning path",
      "Team management",
      "Analytics dashboard",
      "API integration"
    ],
    popular: false
  }
];

const PricingSection = ({ handlePayment }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pilih Paket <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Terbaik</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Investasi terbaik untuk masa depan karir Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                  : 'border-white/10 hover:border-purple-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Paling Populer
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/80">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
                onClick={handlePayment}
              >
                Pilih Paket {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;