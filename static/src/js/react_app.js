import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Hello, React in Odoo!</h1>
      <p>Welcome to the test page for React rendering inside Odoo.</p>
      <ul>
        <li>Test Item 1</li>
        <li>Test Item 2</li>
        <li>Test Item 3</li>
      </ul>
      <button
        onClick={() => alert('React is working!')}
        style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Click Me
      </button>
      <div style={{ marginTop: '20px', fontSize: '16px' }}>
        <strong>Current Date & Time:</strong> {new Date().toLocaleString()}
      </div>
      <div style={{ marginTop: '10px', fontSize: '14px', color: 'gray' }}>
        React Component loaded successfully inside Odoo's web client.
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('react-container'));
root.render(<App />);
