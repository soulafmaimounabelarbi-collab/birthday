import { motion } from 'motion/react';
import { Cake, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function InteractiveCake() {
  const [candles, setCandles] = useState([
    { id: 1, isLit: true },
    { id: 2, isLit: true },
    { id: 3, isLit: true },
    { id: 4, isLit: true },
    { id: 5, isLit: true },
  ]);

  const blowCandles = () => {
    candles.forEach((_, index) => {
      setTimeout(() => {
        setCandles(prev => 
          prev.map(candle => 
            candle.id === index + 1 ? { ...candle, isLit: false } : candle
          )
        );
      }, index * 200);
    });
  };

  const allCandlesOut = candles.every(c => !c.isLit);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="relative max-w-lg mx-auto"
    >
      <div className="bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl p-8 md:p-16 shadow-2xl border-2 border-pink-100">
        {/* Cake */}
        <div className="relative mb-8">
          {/* Top layer */}
          <div className="bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 h-16 rounded-t-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
            {/* Frosting waves */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-white/50 rounded-t-full" />
          </div>

          {/* Candles */}
          <div className="absolute -top-10 left-0 right-0 flex justify-center gap-3">
            {candles.map((candle, index) => (
              <motion.div
                key={candle.id}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Flame */}
                {candle.isLit && (
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-2.5 h-5 bg-gradient-to-t from-orange-400 via-yellow-300 to-yellow-100 rounded-full blur-[1px]" />
                  </motion.div>
                )}
                {/* Candle stick */}
                <div className="w-1.5 h-10 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-sm shadow-sm" />
              </motion.div>
            ))}
          </div>

          {/* Middle layer */}
          <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 h-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
            {/* Decorative dots */}
            <div className="absolute inset-0 flex items-center justify-around px-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white/70 rounded-full shadow-sm" />
              ))}
            </div>
          </div>

          {/* Bottom layer */}
          <div className="bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 h-24 rounded-b-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
            {/* Decorative ribbons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1.5 bg-rose-200/80 shadow-sm" />
            </div>
          </div>
        </div>

        {/* Blow candles button */}
        {!allCandlesOut && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={blowCandles}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white/90 backdrop-blur-sm border-2 border-pink-200 text-pink-500 px-6 py-4 rounded-full text-lg md:text-xl font-light hover:border-pink-300 hover:shadow-xl transition-all"
          >
            Make a Wish & Blow the Candles 🕯️
          </motion.button>
        )}

        {/* Celebration message */}
        {allCandlesOut && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-center space-y-4"
          >
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Sparkles className="text-yellow-400" size={24} fill="currentColor" />
                </motion.div>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-light">
              May all your wishes come true! 🎉
            </p>
            <p className="text-lg text-gray-600">
              Enjoy your special day, my love! 💝
            </p>
          </motion.div>
        )}
      </div>

      {/* Floating sparkles around cake */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          <Sparkles className="text-pink-300" size={14} fill="currentColor" />
        </motion.div>
      ))}
    </motion.div>
  );
}