import Dropcursor from '@tiptap/extension-dropcursor';
import CharacterCount from '@tiptap/extension-character-count';
import Placeholder from '@tiptap/extension-placeholder';
import History from '@tiptap/extension-history';
import Gapcursor from '@tiptap/extension-gapcursor';
import { IEditorExtensions } from 'components/editor/types';

const EditorExtensions: IEditorExtensions = ({
  disableHistory, ...xt
}) => [
  Dropcursor.configure(xt),
  xt.useCharacterCount && CharacterCount.configure(xt),
  Placeholder.configure(xt),
  !disableHistory && History.configure(xt),
  Gapcursor.configure(xt),
];

export default EditorExtensions;
