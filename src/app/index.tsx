import { lazy, Suspense } from 'react';

const Editor = lazy(() => import('components/editor/tiptap'));

const App = () => (
  <main>
    <h1>
      This is a
      &nbsp;
      <a href="https://www.tiptap.dev/">TipTap</a>
      &nbsp;
      Demo
    </h1>
    <br />
    <Suspense fallback={<div>Loading Editor...</div>}>
      <Editor
        extensionsConfig={{
          limit: 100,
          useCharacterCount: true,
          placeholder: 'Write a goddarn text!',
        }}
      />
    </Suspense>
  </main>
);

export default App;
