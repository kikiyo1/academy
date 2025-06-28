import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Play, Star, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Kursus Berkualitas",
    description: "Materi pembelajaran yang disusun oleh ahli di bidangnya dengan standar internasional"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Mentor Berpengalaman",
    description: "Belajar langsung dari praktisi industri dengan pengalaman puluhan tahun"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Sertifikat Resmi",
    description: "Dapatkan sertifikat yang diakui industri setelah menyelesaikan kursus"
  },
  {
    icon: <Play className="w-8 h-8" />,
    title: "Video HD",
    description: "Konten video berkualitas tinggi dengan subtitle dan materi pendukung"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Akses Selamanya",
    description: "Sekali beli, akses selamanya tanpa batasan waktu atau perangkat"
  },
  {
    icon: <ArrowRight className="w-8 h-8" />,
    title: "Update Berkala",
    description: "Materi selalu diperbarui mengikuti perkembangan teknologi terbaru"
  }
];

const FeaturesSection = ({ handleFeatureClick }) => {
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
            Mengapa Memilih <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ACADEMY HADESOLUTION?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Kami menyediakan pengalaman belajar yang komprehensif dengan teknologi terdepan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;