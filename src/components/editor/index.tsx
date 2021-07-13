import { lazy, Suspense, createContext } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import editorExtensions from './partials/ext';
import editorNodes from './partials/nodes';
import editorMarks from './partials/marks';
import { EditorType } from './types';
import './scss/index.scss';

const CharacterCount = lazy(() => import('./partials/character-count'));
const MenuBar = lazy(() => import('./partials/menu-bar'));

export const EditorContext = createContext<{ editor: Editor }>(null);

const EditorMain = ({
  initialValue: content,
  onChange,
  config,
  className = '',
  ...divProps
}: EditorType) => {
  const nodesConfig = config ? config.nodes : {};
  const extensionsConfig = config ? config.extensions : {};
  const marksConfig = config ? config.marks : {};

  const editor = useEditor({
    content,
    onUpdate({ editor: ed }) {
      if (onChange) onChange(ed.getHTML());
    },
    extensions: [
      ...editorExtensions(extensionsConfig),
      ...editorNodes(nodesConfig),
      ...editorMarks(marksConfig),
    ],
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      <div className={`editor--container ${className}`} {...divProps}>
        <Suspense fallback="Loading Menubar ..."><MenuBar /></Suspense>
        <EditorContent editor={editor} />
        <Suspense fallback="Loading Character counter ...">
          <CharacterCount {...extensionsConfig} />
        </Suspense>
      </div>
    </EditorContext.Provider>
  );
};

export default EditorMain;
