"use client";

import { motion } from "framer-motion";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { Contact } from "@/customization";

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
      staggerChildren: 0.2,
    },
  },
};

export default function Contacts() {
  const [selectedMethod, setSelectedMethod] = useState<"email" | "discord" | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">お問い合わせ</h1>
          <p className="text-xl text-purple-200">
            お気軽にご連絡ください。24時間以内に返信させていただきます。
          </p>
        </motion.div>

        {/* 連絡方法の選択 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* メール */}
          <motion.div
            variants={fadeIn}
            className={`bg-white/5 rounded-lg p-8 cursor-pointer transition-all duration-300 ${
              selectedMethod === "email" ? "ring-2 ring-purple-400" : "hover:bg-white/10"
            }`}
            onClick={() => setSelectedMethod("email")}
          >
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-3xl text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">メール</h2>
            </div>
            <p className="text-purple-200">
              {Contact.email}
              <br />
              ビジネスや正式なお問い合わせに
            </p>
          </motion.div>

          {/* Discord */}
          <motion.div
            variants={fadeIn}
            className={`bg-white/5 rounded-lg p-8 cursor-pointer transition-all duration-300 ${
              selectedMethod === "discord" ? "ring-2 ring-purple-400" : "hover:bg-white/10"
            }`}
            onClick={() => setSelectedMethod("discord")}
          >
            <div className="flex items-center mb-4">
              <FaDiscord className="text-3xl text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">Discord</h2>
            </div>
            <p className="text-purple-200">
              {Contact.discord}
              <br />
              気軽な相談やコミュニティ参加に
            </p>
          </motion.div>
        </motion.div>

        {/* 選択後の詳細情報 */}
        <motion.div
          initial="hidden"
          animate={selectedMethod ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-white/5 rounded-lg p-8 text-center"
        >
          {selectedMethod === "email" && (
            <>
              <h3 className="text-xl font-bold text-purple-100 mb-4">メールでのお問い合わせ</h3>
              <p className="text-white mb-6">
                以下のメールアドレスまでご連絡ください：
                <br />
                <span className="text-purple-300 text-lg">{Contact.email}</span>
              </p>
              <button
                onClick={() => (window.location.href = "mailto:traditional@example.com")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                メーラーを起動する
              </button>
            </>
          )}

          {selectedMethod === "discord" && (
            <>
              <h3 className="text-xl font-bold text-purple-100 mb-4">Discordでのお問い合わせ</h3>
              <p className="text-white mb-6">
                以下のリンクから公式Discordサーバーにご参加ください：
                <br />
                <span className="text-purple-300 text-lg">{Contact.discord}</span>
              </p>
              <button
                onClick={() => (window.location.href = Contact.discord)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Discordサーバーに参加
              </button>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
