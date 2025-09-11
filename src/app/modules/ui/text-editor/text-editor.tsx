import { FC, useMemo, useState } from "react";

import { useEditor, EditorContent, EditorContext, extensions } from "@tiptap/react";
import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import { HTMLContent } from "@tiptap/react";

import TextAlign from "@tiptap/extension-text-align";

import ButtonsGroup from "./components/buttons-group";

import htmlViewer from "#utils/helpers/html-sanitize.ts";

import { debounce } from "#utils/helpers/debounce.ts";
import { type Editor } from "@tiptap/react";

import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

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
        <ButtonsGroup editor={editor} />
        <EditorContent className="text-editor__content-zone" editor={editor} />
      </EditorContext.Provider>
    </div>
  );
};

export default TextEditor;
