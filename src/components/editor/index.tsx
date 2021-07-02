import {
  lazy, Suspense, createContext, HtmlHTMLAttributes,
} from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import editorExtensions, { EditorExtensionsType } from './partials/ext';
import editorNodes from './partials/nodes';
import editorMarks from './partials/marks';
import './scss/index.scss';

const CharacterCount = lazy(() => import('./partials/character-count'));
const MenuBar = lazy(() => import('./partials/menu-bar'));

export type EditorType = HtmlHTMLAttributes<HTMLDivElement> & {
  initialValue?: string;
  onChange?: (initialValue: string) => void;
  extensionsConfig?: EditorExtensionsType;
}

export const EditorContext = createContext<{ editor: Editor }>(null);

const EditorMain = ({
  initialValue: content, onChange, extensionsConfig, className, ...divProps
}: EditorType) => {
  const editor = useEditor({
    content,
    onUpdate({ editor: ed }) { onChange(ed.getHTML()); },
    extensions: [
      ...editorExtensions(extensionsConfig),
      ...editorNodes,
      ...editorMarks,
    ],
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      <div className={`editor--container ${className}`} {...divProps}>
        <Suspense fallback="Loading Menubar ...">
          <MenuBar />
        </Suspense>
        <EditorContent editor={editor} />
        <Suspense fallback="Loading Character counter ...">
          <CharacterCount {...extensionsConfig} />
        </Suspense>
      </div>
    </EditorContext.Provider>
  );
};

export default EditorMain;
