import { FC, useMemo, useState } from "react";

import { useEditor, EditorContent, EditorContext, extensions } from "@tiptap/react";
import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";

import TextAlign from "@tiptap/extension-text-align";

import ButtonsGroup from "./components/buttons-group";

const TextEditor: FC = () => {
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
  });

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
