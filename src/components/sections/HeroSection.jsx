import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, ArrowRight, Play } from 'lucide-react';

const HeroSection = ({ handlePayment, handleFeatureClick }) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30"
              >
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-white">Platform #1 di Indonesia</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Belajar Tanpa Batas dengan{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ACADEMY HADESOLUTION
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Bergabunglah dengan ribuan siswa yang telah merasakan pengalaman belajar terbaik. 
                Akses kursus premium, mentor berpengalaman, dan sertifikat resmi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
                onClick={handlePayment}
              >
                Mulai Belajar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => handleFeatureClick('Demo')}
              >
                <Play className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/60">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/60">Kursus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/60">Kepuasan</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                alt="Students learning online with laptops and books"
                className="w-full h-auto rounded-2xl shadow-2xl"
               src="https://images.unsplash.com/photo-1695623275122-245a6955959a" />
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-xl shadow-lg"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;