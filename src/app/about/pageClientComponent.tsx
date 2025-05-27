"use client";

import { About, Common } from "@/customization";
import * as motion from "motion/react-client";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー部分 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">団体概要</h1>
          <p className="text-xl text-purple-200">{Common.orgDescription}</p>
        </motion.div>

        {/* 基本情報 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="bg-white/5 rounded-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-purple-100 mb-6">基本情報</h2>
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <dt className="text-purple-300 mb-2">団体名</dt>
              <dd className="text-white text-lg">{Common.orgName}</dd>
            </div>
            <div>
              <dt className="text-purple-300 mb-2">設立</dt>
              <dd className="text-white text-lg">{About.founded}</dd>
            </div>
            <div>
              <dt className="text-purple-300 mb-2">活動拠点</dt>
              <dd className="text-white text-lg">{About.location}</dd>
            </div>
          </dl>
        </motion.section>

        {/* ミッション */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="bg-white/5 rounded-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-purple-100 mb-6">
            私たちのミッション
          </h2>
          <p className="text-white text-lg leading-relaxed">{About.mission}</p>
        </motion.section>

        {/* 活動内容 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-purple-100 mb-6">活動内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {About.activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/5 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-purple-100 mb-3">
                  {activity.title}
                </h3>
                <p className="text-white">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 会員構成 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-purple-100 mb-6">会員構成</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {About.memberCount.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/5 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-purple-100 mb-2">
                  {stat.count}
                </div>
                <div className="text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* お問い合わせ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="bg-white/5 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-purple-100 mb-6">
            お問い合わせ
          </h2>
          <p className="text-white text-lg mb-6">
            お気軽にお問い合わせください
          </p>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            onClick={() => (window.location.href = About.email)}
          >
            お問い合わせはこちら
          </button>
        </motion.section>
      </div>
    </main>
  );
}
