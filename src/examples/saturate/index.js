import React from 'react';
import './index.css';

const bad = 'hsl(150, 0%, 85%)';
const good = 'hsl(150, 40%, 85%)';

export const Saturate = () => (
  <div className="saturate">
    <p style={{ margin: 0, color: bad }}>
      Some {bad} text (5.4 contrast ratio)
    </p>
    <p style={{ margin: 0, color: good }}>
      Some {good} text (6.2 contrast ratio)
    </p>
  </div>
);
