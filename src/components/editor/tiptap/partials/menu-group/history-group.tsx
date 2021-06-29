import { Editor } from '@tiptap/react';

const HistoryGroup = ({ editor }: { editor: Editor }) => editor && (
  <div className="editor--menu-group">
    <button type="button" onClick={() => editor.chain().focus().undo().run()}>Undo</button>
    <button type="button" onClick={() => editor.chain().focus().redo().run()}>Redo</button>
  </div>
);

export default HistoryGroup;
