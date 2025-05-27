export default function CookiesPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Cookieポリシー</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">
              1. Cookieについて
            </h2>
            <p className="text-white leading-relaxed mb-4">
              当ウェブサイトでは、ユーザーの利便性向上とサービスの品質改善のため、Cookieを使用しています。
              Cookieとは、ウェブサイトがユーザーのコンピュータやモバイルデバイスに保存する小さなテキストファイルです。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">
              2. 使用目的
            </h2>
            <p className="text-white leading-relaxed mb-4">
              当サイトでは、以下の目的でCookieを使用します：
            </p>
            <ul className="list-disc list-inside text-white leading-relaxed ml-4 space-y-2">
              <li>ウェブサイトの基本的な機能の提供</li>
              <li>ユーザー体験の向上</li>
              <li>アクセス解析と利用統計の収集</li>
              <li>セキュリティの確保</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">
              3. 使用するCookieの種類
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">
                  必須Cookie
                </h3>
                <p className="text-white leading-relaxed">
                  ウェブサイトの基本的な機能を提供するために必要不可欠なCookieです。これらは無効にすることはできません。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">
                  パフォーマンスCookie
                </h3>
                <p className="text-white leading-relaxed">
                  サイトの使用状況を分析し、ユーザー体験を向上させるために使用されます。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">
              4. Cookieの管理
            </h2>
            <p className="text-white leading-relaxed mb-4">
              ブラウザの設定により、Cookieの受け入れを制御することができます。
              ただし、Cookieを無効にすると、当ウェブサイトの一部の機能が正常に動作しない場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">
              5. 個人情報の取り扱い
            </h2>
            <p className="text-white leading-relaxed">
              当サイトでは、Cookieを通じて収集した情報は、適切に管理し、
              上記の目的以外での使用や第三者への提供は行いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-100 mb-4">
              6. ポリシーの更新
            </h2>
            <p className="text-white leading-relaxed">
              本Cookieポリシーは適宜更新される場合があります。
              重要な変更がある場合は、当ウェブサイト上で通知いたします。
            </p>
          </section>

          <div className="text-purple-200 text-sm">
            最終更新日: 2025年5月27日
          </div>
        </div>
      </div>
    </main>
  );
}
