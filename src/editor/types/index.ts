import { HtmlHTMLAttributes } from 'react';
import { IEditorExtensionOptions } from './ext';
import { IEditorNodeOptions } from './node';
import { IEditorMarkOptions } from './mark';
import { IMenubarOptions } from './menubar';

export * from './ext';
export * from './node';
export * from './mark';
export * from './menubar';

export interface IEditorConfig {
  extensions: Partial<IEditorExtensionOptions>;
  marks: Partial<IEditorMarkOptions>;
  nodes: Partial<IEditorNodeOptions>;
  menubar: Partial<IMenubarOptions>;
}

export interface IEditor {
  value: string;
  onChange: (value: string) => void;
  config: Partial<IEditorConfig>;
}

export type EditorType = HtmlHTMLAttributes<HTMLDivElement> & Partial<IEditor>;
