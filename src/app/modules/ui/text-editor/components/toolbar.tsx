import { FC } from "react";

import { type Editor } from "@tiptap/react";

import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignStart,
  Undo,
  Redo,
} from "lucide-react";

import { TextAlignButton } from "#tiptap-ui/text-align-button/text-align-button.tsx";
import { HeadingButton } from "#tiptap-ui/heading-button/heading-button.tsx";
import { UndoRedoButton } from "#tiptap-ui/undo-redo-button/undo-redo-button.tsx";

import Button from "#ui/button/button.tsx";

interface IButtonsGroup {
  editor: Editor;
}

const Toolbar: FC<IButtonsGroup> = ({ editor }) => {
  return (
    <div className="toolbar">
      <div className="toolbar__text-style">
        <Bold className="toolbar__item" onClick={() => editor.chain().focus().toggleBold().run()} />
        <Italic className="toolbar__item" onClick={() => editor.chain().focus().toggleItalic().run()} />
        <Underline className="toolbar__item" onClick={() => editor.chain().focus().toggleUnderline().run()} />
      </div>

      <div className="toolbar__text-align">
        <TextAlignStart
          className="toolbar__item"
          onClick={() => editor.chain().focus().toggleTextAlign("left").run()}
        />
        <TextAlignCenter
          className="toolbar__item"
          onClick={() => editor.chain().focus().toggleTextAlign("center").run()}
        />
        <TextAlignEnd className="toolbar__item" onClick={() => editor.chain().focus().toggleTextAlign("right").run()} />
      </div>

      <div className="toolbar__text-size">
        <Heading1 className="toolbar__item" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} />
        <Heading2 className="toolbar__item" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
        <Heading3 className="toolbar__item" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        <Heading4 className="toolbar__item" onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} />
      </div>

      <Undo className="toolbar__item" onClick={() => editor.chain().focus().undo().run()} />
      <Redo className="toolbar__item" onClick={() => editor.chain().focus().redo().run()} />
    </div>
  );
};

export default Toolbar;
