import React from 'react';
import './index.css';

const palette = {
  blue: [
    'hsl(200, 100%, 80%)',
    'hsl(200, 100%, 60%)',
    'hsl(200, 100%, 40%)',
    'hsl(200, 100%, 20%)',
  ],
  red: [
    'hsl(0, 100%, 80%)',
    'hsl(0, 100%, 60%)',
    'hsl(0, 100%, 40%)',
    'hsl(0, 100%, 20%)',
  ],
  purple: [
    'hsl(300, 100%, 80%)',
    'hsl(300, 100%, 60%)',
    'hsl(300, 100%, 40%)',
    'hsl(300, 100%, 20%)',
  ],
};

export const Palette = () => (
  <div class="palette">
    <div>
      {palette.blue.map(col => (
        <div className="palette__item" style={{ backgroundColor: col }}>
          {col}
        </div>
      ))}
    </div>
    <div>
      {palette.red.map(col => (
        <div className="palette__item" style={{ backgroundColor: col }}>
          {col}
        </div>
      ))}
    </div>
    <div>
      {palette.purple.map(col => (
        <div className="palette__item" style={{ backgroundColor: col }}>
          {col}
        </div>
      ))}
    </div>
  </div>
);
