import React from 'react';
import { hot } from 'react-hot-loader/root';

import SVGIcon from 'components/SVGIcon';

import './App.css';

function App() {
  return (
    <div className="App">
      <SVGIcon icon="hi" width={40} height={40} />
    </div>
  );
}

export default hot(App);
