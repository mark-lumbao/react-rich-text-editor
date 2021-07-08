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
import Table, { TableOptions } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';

export type EditorNodesType = Partial<{
} & TableOptions>;

const editorNodes = (nd: EditorNodesType) => [
  Document,
  Text,
  Paragraph,
  CodeBlock,
  Heading,
  HorizontalRule,
  Image,
  ListItem,
  BulletList,
  OrderedList,
  Table.configure(nd),
  TableRow,
  TableCell,
  TableHeader,
  TaskList,
  TaskItem,
];

export default editorNodes;
