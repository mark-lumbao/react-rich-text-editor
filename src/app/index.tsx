import { lazy, Suspense } from 'react';

const Editor = lazy(() => import('components/editor'));

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
        className="myCustomClass"
        style={{ maxWidth: 600, margin: 10 }}
        onChange={(value) => console.log(value)} // eslint-disable-line
        initialValue="<h1>Initial content</h1>"
        config={{
          nodes: { resizable: true },
          extensions: {
            limit: 100,
            useCharacterCount: true,
            placeholder: 'Write a goddarn text!',
          },
        }}
      />
    </Suspense>
  </main>
);

export default App;
