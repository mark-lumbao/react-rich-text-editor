import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import CodeBlock from '@tiptap/extension-code-block';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';

const editorNodes = [
  Document,
  Text,
  Paragraph,
  CodeBlock,
  Heading,
  HorizontalRule,
];

export default editorNodes;
