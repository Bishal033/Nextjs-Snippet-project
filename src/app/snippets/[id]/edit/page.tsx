import notFound from '@/app/snippets/[id]/not-found';
import {db} from '@/db';
import SnippetEditForm from '@/components/snippet-edit-form';
interface SnippetEditPageProps {
    params: {
        id: string;
    };
}

export default async function SnippetEditPage(params: SnippetEditPageProps){
    const id = parseInt(params.params.id);
    const snippet = await db.snippet.findFirst({
        where: {
            id
        }
    });
    if (!snippet) {
        notFound();
    }

    return <div>
       <SnippetEditForm snippet={snippet} />
        </div>
}