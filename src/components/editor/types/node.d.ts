import { Node } from '@tiptap/react';
import { TableOptions } from '@tiptap/extension-table';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
import { CodeBlockOptions } from '@tiptap/extension-code-block';
import { HeadingOptions } from '@tiptap/extension-heading';
import { HorizontalRuleOptions } from '@tiptap/extension-horizontal-rule';
import { ImageOptions } from '@tiptap/extension-image';
import { ListItemOptions } from '@tiptap/extension-list-item';
import { BulletListOptions } from '@tiptap/extension-bullet-list';
import { OrderedListOptions } from '@tiptap/extension-ordered-list';
import { TableRowOptions } from '@tiptap/extension-table-row';
import { TableCellOptions } from '@tiptap/extension-table-cell';
import { TableHeaderOptions } from '@tiptap/extension-table-header';
import { TaskListOptions } from '@tiptap/extension-task-list';
import { TaskItemOptions } from '@tiptap/extension-task-item';

export interface IEditorNodeOptions extends
  TableOptions,
  ParagraphOptions,
  CodeBlockOptions,
  HeadingOptions,
  HorizontalRuleOptions,
  ImageOptions,
  ListItemOptions,
  BulletListOptions,
  OrderedListOptions,
  TableOptions,
  TableRowOptions,
  TableCellOptions,
  TableHeaderOptions,
  TaskListOptions,
  TaskItemOptions {
  }

export interface IEditorNodes {
  (nd: Partial<IEditorNodeOptions>): Node<unknown>[];
}
