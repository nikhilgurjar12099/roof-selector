// src/App.tsx
import React from 'react';
import Canvas from './components/Canvas';
import ExportButton from './components/ExportButton';

const App: React.FC = () => {
  return (
    <div>
      <h1>Roof Selector</h1>
      <Canvas />
      <ExportButton />
    </div>
  );
};

export default App;
