import { BoldOptions } from '@tiptap/extension-bold';
import { ItalicOptions } from '@tiptap/extension-italic';
import { LinkOptions } from '@tiptap/extension-link';
import { UnderlineOptions } from '@tiptap/extension-underline';
import { Mark } from '@tiptap/react';

export interface IEditorMarkOptions extends
  BoldOptions,
  UnderlineOptions,
  LinkOptions,
  ItalicOptions {}

export interface IEditorMarks {
  (mk: Partial<IEditorMarkOptions>): Mark<unknown>[];
}
