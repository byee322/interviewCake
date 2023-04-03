import React from 'react'
import ReactDOM from 'react-dom'
import NestedComments from 'NestedComments'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <StrictMode>
    <NestedComments />
  </StrictMode>
);
