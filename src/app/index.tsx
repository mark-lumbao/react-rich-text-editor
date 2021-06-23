import { lazy, Suspense } from 'react';

const Editor = lazy(() => import('components/editor'));

const App = () => (
  <main>
    <h1>
      This is a
      &nbsp;
      <u>React Application</u>
      &nbsp;
      🔥🚀
    </h1>
    <br />
    <Suspense fallback={<div>Loading Editor...</div>}>
      <Editor />
    </Suspense>
  </main>
);

export default App;
