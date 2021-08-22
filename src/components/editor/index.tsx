import {
  useEffect, lazy, Suspense, createContext,
} from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import editorExtensions from './partials/ext';
import editorNodes from './partials/nodes';
import editorMarks from './partials/marks';
import { EditorType } from '.';
import { sanitizeConfig } from './util';
import './scss/index.scss';

export * from './types';

export const EditorContext = createContext<{ editor: Editor }>(null);

const CharacterCount = lazy(() => import('./partials/character-count'));
const MenuBar = lazy(() => import('./partials/menu-bar'));

const EditorMain = ({
  value: content, onChange, config, className = '', ...divProps
}: EditorType) => {
  const sanitizedConfig = sanitizeConfig({ ...config });
  const {
    menubar, nodes, marks, extensions,
  } = sanitizedConfig;

  const editor = useEditor({
    content,
    onUpdate({ editor: ed }) { if (onChange) onChange(ed.getHTML()); },
    extensions: [
      ...editorExtensions(extensions),
      ...editorNodes(nodes),
      ...editorMarks(marks),
    ],
  });

  const pos = menubar.position === 'bottom' ? 'reverse' : '';

  useEffect(() => { // triggers clear whenever content is null
    if (!content && editor) editor.commands.clearContent(true);
  }, [content]);

  return (
    <EditorContext.Provider value={{ editor }}>
      <div className={`editor--container ${pos} ${className}`} {...divProps}>
        <Suspense fallback="Loading Menubar ..."><MenuBar {...sanitizedConfig} /></Suspense>
        <div>
          <EditorContent editor={editor} />
          <Suspense fallback="Loading Character counter ..."><CharacterCount {...extensions} /></Suspense>
        </div>
      </div>
    </EditorContext.Provider>
  );
};

export default EditorMain;
