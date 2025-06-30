import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/CHANGELOG.md')
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(marked(text));
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📄 Changelog</h1>
      <div
        dangerouslySetInnerHTML={{ __html: markdown }}
        style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}
      />
    </div>
  );
}

export default App;
