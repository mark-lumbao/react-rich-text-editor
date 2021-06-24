import { Fragment } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Dropcursor from '@tiptap/extension-dropcursor';
import CharacterCount from '@tiptap/extension-character-count';
import Placeholder from '@tiptap/extension-placeholder';
import History from '@tiptap/extension-history';
import MenuBar from './menu-bar';

const App = () => {
  const editor = useEditor({
    extensions: [
      History, Dropcursor, CharacterCount, Placeholder,
      Document, Paragraph, Text,
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>`,
  });

  return (
    <Fragment>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Fragment>
  );
};

export default App;
