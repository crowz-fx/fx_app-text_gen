import React from 'react';
import ReactDOM from 'react-dom';
import TextGen from './TextGen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextGen />, div);
});
