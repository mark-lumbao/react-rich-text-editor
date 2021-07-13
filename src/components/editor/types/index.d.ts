import { HtmlHTMLAttributes } from 'react';
import { IEditorExtensionOptions } from './ext';
import { IEditorNodeOptions } from './node';
import { IEditorMarkOptions } from './mark';

export * from './ext';
export * from './node';
export * from './mark';

export interface IEditorConfig {
  extensions: Partial<IEditorExtensionOptions>;
  marks: Partial<IEditorMarkOptions>;
  nodes: Partial<IEditorNodeOptions>;
}

export interface IEditor {
  initialValue: string;
  onChange: (value: string) => void;
  config: Partial<IEditorConfig>;
}

export type EditorType = HtmlHTMLAttributes<HTMLDivElement> & Partial<IEditor>;
