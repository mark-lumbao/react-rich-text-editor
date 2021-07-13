import { lazy, Suspense, createContext } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import editorExtensions from './partials/ext';
import editorNodes from './partials/nodes';
import editorMarks from './partials/marks';
import { EditorType } from './types';
import { sanitizeConfig } from './util';
import './scss/index.scss';

export const EditorContext = createContext<{ editor: Editor }>(null);

const CharacterCount = lazy(() => import('./partials/character-count'));
const MenuBar = lazy(() => import('./partials/menu-bar'));

const EditorMain = ({
  initialValue: content,
  onChange,
  config = { nodes: {}, extensions: {}, marks: {} },
  className = '',
  ...divProps
}: EditorType) => {
  const { nodes, marks, extensions } = sanitizeConfig(config);

  const editor = useEditor({
    content,
    onUpdate({ editor: ed }) { if (onChange) onChange(ed.getHTML()); },
    extensions: [
      ...editorExtensions(extensions),
      ...editorNodes(nodes),
      ...editorMarks(marks),
    ],
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      <div className={`editor--container ${className}`} {...divProps}>
        <Suspense fallback="Loading Menubar ..."><MenuBar {...config} /></Suspense>
        <EditorContent editor={editor} />
        <Suspense fallback="Loading Character counter ..."><CharacterCount {...extensions} /></Suspense>
      </div>
    </EditorContext.Provider>
  );
};

export default EditorMain;
