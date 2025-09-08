import { FC, useMemo, useState } from "react";

import { useEditor, EditorContent, EditorContext, extensions } from "@tiptap/react";
import { FloatingMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import { TextAlignButton } from "../../../../../@/components/tiptap-ui/text-align-button";

const TextEditor: FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<p>Hello world</p>",
  });

  const providerValue = useMemo(() => ({ editor }), [editor]);

  return (
    <EditorContext.Provider value={providerValue}>
      {/* <FloatingMenu editor={editor}>

      </FloatingMenu> */}

      <TextAlignButton editor={editor} align="left" />
      <TextAlignButton editor={editor} align="center" />
      <TextAlignButton editor={editor} align="right" />

      <EditorContent editor={editor} />
    </EditorContext.Provider>
  );
};

export default TextEditor;
