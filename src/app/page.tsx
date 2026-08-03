import Link from 'next/link';

import {db} from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany(); 
  const renderSnippets = snippets.map((snippet) => {
    return (
      <Link key={snippet.id} 
        href={`/snippets/${snippet.id}`}

        className="flex justify-between items-center p-4 border-collapse rounded hover:bg-blue-100 transition-colors">
        <div className="text-lg font-bold">{snippet.title}
        </div>
        <div>View</div>
      </Link>
    )
  });
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Snippets</h1>
        <Link href="/snippets/new" className="bg-blue-500 text-white rounded p-2">Create a Snippet</Link>
      </div>
      <div className="flex flex-col gap-2 mt-4">
     {renderSnippets}
      </div>
     
    </div>
  );
}
