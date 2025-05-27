"use client";

import { motion } from "framer-motion";
import { RiToolsFill } from "react-icons/ri";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Works() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-20 px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 relative overflow-hidden"
        >
          {/* 装飾的な背景要素 */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10" />

          {/* アイコンとテキスト */}
          <motion.div animate={pulse} className="relative z-10 mb-8">
            <RiToolsFill className="text-7xl text-purple-400 mx-auto" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10"
          >
            Coming Soon
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-purple-200 leading-relaxed relative z-10"
          >
            制作実績ページは現在準備中です。
            <br />
            素敵な作品たちをご紹介できる日を
            <br className="md:hidden" />
            楽しみにお待ちください。
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
