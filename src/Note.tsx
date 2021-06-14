import { useState } from "react";
import { useStickyState } from "./stickyState";
import { ContentState, EditorState, convertToRaw, convertFromRaw, RawDraftContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

export interface NoteData extends RawDraftContentState {
    id: string,
    name: string,
}

export interface NoteProps {
    id: string
}

export default function Note(props: NoteProps) {
    let [value, setValue] = useStickyState<NoteData>({
        id: props.id,
        name: "no name",
        blocks: [],
        entityMap: {}
    }, props.id);
    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(convertFromRaw(value)),
    );

    const onStateChange = (currentState: RawDraftContentState) => {
        setValue({
            id: value.id,
            name: value.name,
            ...currentState
        });
    }

    return <Editor editorState={editorState} onChange={onStateChange} onEditorStateChange={setEditorState} />
}