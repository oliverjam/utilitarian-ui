import React from 'react';
import './index.css';

export const LineHeight = () => (
  <div className="lh-grid">
    <div className="line-height">
      <h1 className="line-height__title">
        A long title that hopefully wraps onto at least one more line<br />
        <code>line-height: 1.5</code>
      </h1>
      <p className="line-height__body--large">
        Some paragraph text that should wrap onto the next line if I keep typing
        for long enough<br />
        <code>line-height: 1.5</code>
      </p>
      <p className="line-height__body">
        Some paragraph text that should wrap onto the next line if I keep typing
        for long enough<br />
        <code>line-height: 1.5</code>
      </p>
    </div>

    <div className="line-height line-height--fixed">
      <h1 className="line-height__title">
        A long title that hopefully wraps onto at least one more line<br />
        <code>line-height: 1.1</code>
      </h1>
      <p className="line-height__body--large">
        Some paragraph text that should wrap onto the next line if I keep typing
        for long enough<br />
        <code>line-height: 1.25</code>
      </p>
      <p className="line-height__body">
        Some paragraph text that should wrap onto the next line if I keep typing
        for long enough<br />
        <code>line-height: 1.5</code>
      </p>
    </div>
  </div>
);
