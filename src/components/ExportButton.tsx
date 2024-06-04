import React from 'react';
import { toPng } from 'html-to-image';

function ExportButton ()  {
  const handleExport = () => {
    const node = document.getElementById('canvas-container');
    if (node) {
      toPng(node)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'roof-drawing.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Error exporting image:', error);
        });
    }
  };

  return (
    <button onClick={handleExport}>Export Image</button>
  );
};

export default ExportButton;
