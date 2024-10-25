export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Codemods</h1>
      <p className="mb-4">
        Next.jsのAPIが、更新または非推奨になった際に自動でアップグレードしてくれる機能
      </p>
      <h2 className="text-xl font-semibold mb-2">サンプルページリンク一覧</h2>
      <ul className="list-disc pl-5">
        <li>
          <a href="/sample1" className="text-blue-500 hover:underline">
            サンプルページ 1
          </a>
        </li>
        <li>
          <a href="/sample2" className="text-blue-500 hover:underline">
            サンプルページ 2
          </a>
        </li>
        <li>
          <a href="/sample3" className="text-blue-500 hover:underline">
            サンプルページ 3
          </a>
        </li>
      </ul>
    </div>
  );
}
