'use client';
import type {Snippet} from '@prisma/client';

import Editor from '@monaco-editor/react';
import {useState} from 'react';

import * as actions from '@/actions';



interface SnippetEditFormProps {
    snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);
    const handleEditorChange = (value: string | undefined) => {
        setCode(value || '');
    }

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, snippet.title, code);


    return(
        <div>
            Client component for editing snippet with title {snippet.title}
            <Editor
                height="200px"
                language="javascript"
                theme="vs-dark"
                defaultValue={snippet.code}
                options={{minimap: {enabled: false}}}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">Save</button>
            </form>
        </div>
    )
}
