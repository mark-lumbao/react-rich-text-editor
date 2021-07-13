import { DropcursorOptions } from '@tiptap/extension-dropcursor';
import { CharacterCountOptions } from '@tiptap/extension-character-count';
import { PlaceholderOptions } from '@tiptap/extension-placeholder';
import { HistoryOptions } from '@tiptap/extension-history';
import { Extension } from '@tiptap/react';
import { ReactElement } from 'react';

export interface IEditorExtensionOptions extends
  DropcursorOptions,
  CharacterCountOptions,
  PlaceholderOptions,
  HistoryOptions {
    useCharacterCount: boolean;
  }

export interface IEditorExtensions {
  (xt: Partial<IEditorExtensionOptions>): Extension<unknown>[];
}

export interface ICharacterCount {
  (opt: Partial<IEditorExtensionOptions>): ReactElement;
}
