import { motion } from 'motion/react';
import { Heart, Sparkles, Cake, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';
import { InteractiveCake } from './components/InteractiveCake';

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showCake, setShowCake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    x: Math.random() * 100,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Floating hearts background */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute opacity-10"
          initial={{ y: '100vh', x: `${heart.x}vw` }}
          animate={{
            y: '-20vh',
            x: `${heart.x + Math.sin(heart.delay) * 10}vw`,
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          <Heart className="text-purple-400" size={20 + Math.random() * 12} fill="currentColor" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-5xl w-full space-y-12">
          {/* Birthday title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center space-y-6"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              <Gift className="text-purple-400 mx-auto" size={56} />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
              Happy Birthday
            </h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-purple-300" />
              <p className="text-xl md:text-3xl text-gray-600 font-light">To The beast person in My Life</p>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-purple-300" />
            </motion.div>
          </motion.div>

        
         
          

          {/* Birthday message */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-10 md:p-14 shadow-lg border border-purple-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
                className="mb-8"
              >
                <Heart className="text-rose-400 mx-auto" size={40} fill="currentColor" />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
              >
                From the moment you walked into my life, everything changed for the better. I promise to stand by your side, to support you, to laugh with you, and to love you more with every passing day. <br /><br />
               On your special day, I want you to know how deeply I love you and how much I love being with you. You are my favorite person, my best friend, and my happiness. <br /><br />

                
               Here's to many more birthdays together. I love you 😘.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="space-y-5 text-center"
              >
                <p className="text-purple-500 text-xl font-light">
                  I love you more than words can say ❤️
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Get Your Gift Button */}
          {!showCake && showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 150 }}
              className="flex justify-center py-8"
            >
              <motion.button
                onClick={() => setShowCake(true)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/80 backdrop-blur-sm text-purple-600 px-12 py-5 rounded-full text-lg md:text-xl font-light shadow-lg border border-purple-200 hover:border-purple-300 hover:shadow-xl transition-all flex items-center gap-3"
              >
                <Cake size={26} className="text-purple-500" />
                <span>Get Your Gift</span>
                <Sparkles size={22} className="text-pink-400" fill="currentColor" />
              </motion.button>
            </motion.div>
          )}

          {/* Interactive Cake */}
          {showCake && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="py-8"
            >
              <InteractiveCake />
            </motion.div>
          )}
        </div>
      </div>

      {/* Gradient overlay for soft effect */}
      <div className="fixed inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-pink-100/20 pointer-events-none" />
    </div>
  );
}