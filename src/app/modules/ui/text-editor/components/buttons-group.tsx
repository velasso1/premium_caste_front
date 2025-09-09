import { FC } from "react";

import { type Editor } from "@tiptap/react";

import { TextAlignButton } from "#tiptap-ui/text-align-button/text-align-button.tsx";
import { HeadingButton } from "#tiptap-ui/heading-button/heading-button.tsx";
import { UndoRedoButton } from "#tiptap-ui/undo-redo-button/undo-redo-button.tsx";

interface IButtonsGroup {
  editor: Editor;
}

const ButtonsGroup: FC<IButtonsGroup> = ({ editor }) => {
  return (
    <div className="text-editor__buttons-menu">
      <TextAlignButton editor={editor} align="left" />
      <TextAlignButton editor={editor} align="center" />
      <TextAlignButton editor={editor} align="right" />
      <HeadingButton editor={editor} level={1} />
      <HeadingButton editor={editor} level={2} />
      <HeadingButton editor={editor} level={3} />
      <HeadingButton editor={editor} level={4} />
      <UndoRedoButton editor={editor} action="undo" />
      <UndoRedoButton editor={editor} action="redo" />
    </div>
  );
};

export default ButtonsGroup;
