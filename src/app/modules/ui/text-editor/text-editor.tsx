import { FC, SetStateAction, useMemo, useState, Dispatch } from "react";

import { useEditor, EditorContent, EditorContext, extensions, type Editor } from "@tiptap/react";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

import StarterKit from "@tiptap/starter-kit";

import TextAlign from "@tiptap/extension-text-align";

import Toolbar from "./components/toolbar";

import htmlViewer from "#utils/helpers/html-sanitize.ts";
import { debounce } from "#utils/helpers/debounce.ts";

type EditorState = string | IPostInfoPayload;

interface ITextEditorProps {
  editorState: EditorState;
  setEditorState: Dispatch<SetStateAction<string>>;
}

const TextEditor: FC<ITextEditorProps> = ({ editorState, setEditorState }) => {
  // const [editorFocus, setEditorFocus] = useState<boolean>(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "",
    onUpdate({ editor }) {
      textEditorHandler(editor);
    },
  });

  // const textEditorHandler = debounce((editor: Editor): void => {
  //   const cleanHTML = htmlViewer(editor.getHTML());
  //   setEditorState({ ...editorState, content: cleanHTML });
  // }, 400);

  const textEditorHandler = (editor: Editor): void => {
    const cleanHTML = htmlViewer(editor.getHTML());

    setEditorState(cleanHTML);

    // setEditorState({ ...editorState, content: cleanHTML });

    // if (typeof editorState !== "string") {
    //   // setEditorState({ ...editorState, content: cleanHTML });
    //   // return;
    // }
  };

  const providerValue = useMemo(() => ({ editor }), [editor]);

  return (
    <div className="text-editor">
      <EditorContext.Provider value={providerValue}>
        <Toolbar editor={editor} />
        <EditorContent className="text-editor__content-zone" editor={editor} />
      </EditorContext.Provider>
    </div>
  );
};

export default TextEditor;
