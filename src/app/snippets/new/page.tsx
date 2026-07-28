import {redirect}  from 'next/navigation';
import {db} from '@/db';
 
export default function SnippetCreatePage(){

    async function createSnippet(formData: FormData){
        // This needs to be a server action, so we can use the db directly here.
        'use server';

        // Check the user's input and make sure they're valid before creating the snippet in the database.
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;
        // Create a new record in the database.
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        });
        console.log('Created snippet', snippet);
        // Redirect the user back to the root route after the snippet is created.
        redirect('/');
    }

    return  <form action={createSnippet}>
        <h3 className="text-lg font-semibold">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
        <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
            Title:
            </label> 
            <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
            />
            </div>

        <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
            Code:
            </label> 
            <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
            />
            </div>

        <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">Create</button>
        </div>
    </form> 
}