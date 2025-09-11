import { FC, useMemo, useState } from "react";

import { useEditor, EditorContent, EditorContext, extensions, type Editor } from "@tiptap/react";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

import StarterKit from "@tiptap/starter-kit";

import TextAlign from "@tiptap/extension-text-align";

import Toolbar from "./components/toolbar";

import htmlViewer from "#utils/helpers/html-sanitize.ts";
import { debounce } from "#utils/helpers/debounce.ts";

interface ITextEditorProps {
  editorState: IPostInfoPayload;
  setEditorState: (arg: IPostInfoPayload) => void;
}

const TextEditor: FC<ITextEditorProps> = ({ editorState, setEditorState }) => {
  // const [editorState, setEditorState] = useState<string>("");

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
    setEditorState({ ...editorState, content: cleanHTML });
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
