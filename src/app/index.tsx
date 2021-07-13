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
        initialValue="<h1>Initial content</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae turpis id leo tincidunt pulvinar sed eget tortor. Mauris sodales erat id nisl commodo tincidunt. Quisque vel porttitor felis. Donec sit amet consectetur tortor, vel dignissim tellus. Pellentesque in dignissi.</p>"
        config={{
          nodes: { resizable: true },
          extensions: {
            limit: 300,
            useCharacterCount: true,
            placeholder: 'Write a goddarn text!',
          },
        }}
      />
    </Suspense>
  </main>
);

export default App;
