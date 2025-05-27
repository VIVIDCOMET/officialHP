"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { FaUnity } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <motion.h1
            className="font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/img/logotype_white.png"
              alt="Game Creators Community"
              width={1000}
              height={0}
              className="mx-auto"
            />
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ゲームづくりの夢を叶える、クリエイターの集まる場所
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-purple-500 text-white px-8 py-3 rounded-md font-semibold button-hover">
              参加する
            </button>
            <button className="bg-transparent border-2 border-purple-400 text-purple-200 px-8 py-3 rounded-md font-semibold button-hover">
              活動を見る
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            活動内容
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/5 p-6 rounded-md shadow-lg card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-purple-500/80 rounded-md w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <FaUnity className="text-white opacity-90" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-100">
                ゲーム開発
              </h3>
              <p className="text-purple-200 text-center break-keep">
                Unityやゲームエンジンを使って、
                <wbr />
                みんなで
                <wbr />
                ワイワイゲームを
                <wbr />
                作ろう！
                <wbr />
                初心者歓迎！
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 p-6 rounded-md shadow-lg card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-purple-500/80 rounded-md w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <FaLaptopCode className="text-white opacity-90" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-100">
                勉強会
              </h3>
              <p className="text-purple-200 text-center break-keep">
                プログラミングやデザインの
                <wbr />
                スキルを
                <wbr />
                共有！
                <wbr />
                他の人と一緒に学び、成長しよう！
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 p-6 rounded-md shadow-lg card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-purple-500/80 rounded-md w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <FaPenFancy className="text-white opacity-90" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-100">
                イラスト・音楽・ストーリー制作
              </h3>
              <p className="text-purple-200 text-center break-keep">
                ゲームの世界観を
                <wbr />
                彩るイラストや音楽、
                <wbr />
                ストーリーを
                <wbr />
                一緒に作ろう！
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-purple-100">
            コミュニティに参加しよう！
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Discordでの交流、情報共有、共同作業など。
            <br />
            あなたの「作りたい！」を応援します！
          </p>
          <button
            className="bg-purple-500 text-white px-8 py-3 rounded-md font-semibold button-hover"
            onClick={() =>
              // TODO: Replace with your Discord invite link
              window.open("https://discord.gg/your-discord-link", "_blank")
            }
          >
            Discordに参加する
          </button>
        </motion.div>
      </section>
    </main>
  );
}
