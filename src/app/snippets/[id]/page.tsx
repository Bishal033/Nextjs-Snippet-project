import {notFound} from "next/navigation";
import {db} from "@/db";
import Link from "next/link";
import * as actions from "@/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps){
    await new Promise((r)=> setTimeout(r, 2000));
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    });
    
    if (!snippet) {
        notFound();
    }


    const deleteSnippetAction = actions.deleteSnippet.bind(null, parseInt(props.params.id));
    return <div>
        <div className="flex m-4 justify-between items-center">
            <h1 className="text-2xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
            <Link href={`/snippets/${props.params.id}/edit`} className="bg-blue-500 text-white rounded p-2 mr-2">Edit</Link>
            <form action={deleteSnippetAction}>
                <button className="bg-red-500 text-white rounded p-2">Delete</button>
            </form>
            
        </div>
        </div>
        <pre className="bg-green-400 p-4 rounded m-4 overflow-x-auto">
            <code>{snippet.code}</code>
        </pre>
         </div>
}