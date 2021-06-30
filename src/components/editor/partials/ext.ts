import Dropcursor, { DropcursorOptions } from '@tiptap/extension-dropcursor';
import CharacterCount, { CharacterCountOptions } from '@tiptap/extension-character-count';
import Placeholder, { PlaceholderOptions } from '@tiptap/extension-placeholder';
import History, { HistoryOptions } from '@tiptap/extension-history';

export type EditorExtensionsType = Partial<{
  useCharacterCount: boolean,
} & CharacterCountOptions &
  PlaceholderOptions &
  HistoryOptions &
  DropcursorOptions>;

const editorExtensions = (xt: EditorExtensionsType) => [
  Dropcursor.configure(xt),
  CharacterCount.configure(xt),
  Placeholder.configure(xt),
  History,
];

export default editorExtensions;
