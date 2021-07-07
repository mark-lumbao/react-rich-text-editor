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
];

export default editorNodes;
