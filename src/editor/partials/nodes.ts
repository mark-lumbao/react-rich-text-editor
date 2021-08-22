import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import CodeBlock from '@tiptap/extension-code-block';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { IEditorNodes } from 'editor/types';

const editorNodes: IEditorNodes = ({
  disableTable, disableList, disableTask,
  disableImage, disableHorizontalRule, disableHeading,
  disableCodeblock, ...nd
}) => [
  Document.configure(nd),
  Text.configure(nd),
  Paragraph.configure(nd),
  !disableCodeblock && CodeBlock.configure(nd),
  !disableHeading && Heading.configure(nd),
  !disableHorizontalRule && HorizontalRule.configure(nd),
  !disableImage && Image.configure(nd),
  !disableList && ListItem.configure(nd),
  !disableList && BulletList.configure(nd),
  !disableList && OrderedList.configure(nd),
  !disableTable && Table.configure(nd).configure(nd),
  !disableTable && TableRow.configure(nd),
  !disableTable && TableCell.configure(nd),
  !disableTable && TableHeader.configure(nd),
  !disableTask && TaskList.configure(nd),
  !disableTask && TaskItem.configure(nd),
];

export default editorNodes;
