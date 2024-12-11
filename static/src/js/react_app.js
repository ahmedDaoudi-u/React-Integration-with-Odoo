import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Hello, React in Odoo!</h1>
      <p>Welcome to the test page for React rendering inside Odoo.</p>
      <button
        onClick={() => alert('React is working!')}
        style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </div>
  );
};

const container = document.getElementById('react-container');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
