import { Editor } from '@tiptap/react';
import HistoryGroup from './menu-group/history-group';
import CodeblockGroup from './menu-group/codeblock-group';
import HeaingGroup from './menu-group/heading-group';

const MenuBar = ({ editor }: { editor: Editor }) => editor && (
  <div className="editor--menu">
    <HistoryGroup editor={editor} />
    <CodeblockGroup editor={editor} />
    <HeaingGroup editor={editor} />
  </div>
);

export default MenuBar;
