import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { mayarPaymentLink } from '@/lib/mayar';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import CtaSection from '@/components/sections/CtaSection';
import LoginModal from '@/components/auth/LoginModal';

function App() {
  const { toast } = useToast();
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  const handlePayment = () => {
    toast({
      title: "Mengarahkan ke Pembayaran...",
      description: "Anda akan diarahkan ke halaman pembayaran Mayar ID.",
    });
    setTimeout(() => {
      window.open(mayarPaymentLink, '_blank');
    }, 1500);
  };

  const handleFeatureClick = (feature) => {
    if (feature === 'Masuk') {
      setIsLoginModalOpen(true);
    } else {
      toast({
        title: "🚧 Fitur Ini",
        description: `${feature} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>ACADEMY HADESOLUTION - Platform Pembelajaran Online Terdepan</title>
        <meta name="description" content="Bergabunglah dengan ribuan siswa yang telah merasakan pengalaman belajar terbaik di ACADEMY HADESOLUTION." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <Header handlePayment={handlePayment} handleFeatureClick={handleFeatureClick} />
        
        <main>
          <HeroSection handlePayment={handlePayment} handleFeatureClick={handleFeatureClick} />
          <FeaturesSection handleFeatureClick={handleFeatureClick} />
          <PricingSection handlePayment={handlePayment} />
          <CtaSection handlePayment={handlePayment} />
        </main>

        <Footer handleFeatureClick={handleFeatureClick} />

        <LoginModal isOpen={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
        <Toaster />
      </div>
    </>
  );
}

export default App;