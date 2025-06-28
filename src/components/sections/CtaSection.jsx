import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = ({ handlePayment }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-500/30"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Belajar Anda?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan siswa yang telah mengubah karir mereka bersama ACADEMY HADESOLUTION
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-12 py-6"
            onClick={handlePayment}
          >
            Daftar Sekarang - Gratis 7 Hari
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;