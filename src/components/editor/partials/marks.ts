import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { IEditorMarks } from 'components/editor/types';

const editorMarks: IEditorMarks = ({
  disableLinks, disableMarks, ...mk
}) => [
  !disableMarks && Bold.configure(mk),
  !disableMarks && Italic.configure(mk),
  !disableMarks && Underline.configure(mk),
  !disableLinks && Link.configure(mk),
];

export default editorMarks;
