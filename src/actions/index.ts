'use server';

import {redirect} from 'next/navigation';
import {db} from '@/db';

export async function editSnippet(id: number, title: string, code: string){
    await db.snippet.update({
        where: {
            id
        },
        data: {
            title,
            code
        }
    });

    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number){
    await db.snippet.delete({
        where: {
            id
        }
    });
    redirect('/'); 
}