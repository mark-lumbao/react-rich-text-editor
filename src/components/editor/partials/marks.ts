import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { IEditorMarks } from 'components/editor/types';

const editorMarks: IEditorMarks = (mk) => [
  Bold.configure(mk),
  Italic.configure(mk),
  Underline.configure(mk),
  Link.configure(mk),
];

export default editorMarks;
