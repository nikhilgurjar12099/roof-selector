import React, { useState } from 'react';
import { Stage, Layer, Line, Image } from 'react-konva';
import useImage from 'use-image';
import { Point } from '../types';
import roofImage from '../assets/roof-image.jpg'; 

function Canvas () {
  const [points, setPoints] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [image, status] = useImage(roofImage); 

  const handleMouseDown = (event: any) => {
    const { offsetX, offsetY } = event.evt;
    setPoints([...points, { x: offsetX, y: offsetY }]);
    setIsDrawing(true);
  };

  const handleMouseMove = (event: any) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.evt;
    setPoints([...points, { x: offsetX, y: offsetY }]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div id="canvas-container">
      {status === 'loading' && <div>Loading image...</div>}
      {status === 'failed' && <div>Failed to load image</div>}
      <Stage
        width={800}
        height={600}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {image && <Image image={image} width={800} height={600} />}
          <Line
            points={points.flatMap(p => [p.x, p.y])}
            stroke="red"
            strokeWidth={2}
            closed={true}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
