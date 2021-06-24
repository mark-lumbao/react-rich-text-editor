import { lazy, Suspense } from 'react';

const Editor = lazy(() => import('components/editor/tiptap'));

const App = () => (
  <main>
    <h1>
      This is a
      &nbsp;
      <u>TipTap Demo</u>
    </h1>
    <br />
    <Suspense fallback={<div>Loading Editor...</div>}>
      <Editor />
    </Suspense>
  </main>
);

export default App;
