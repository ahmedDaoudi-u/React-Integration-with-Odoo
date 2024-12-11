import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Hello, React is working!</h1>
            <button onClick={() => alert('Button clicked!')}>Click Me</button>
        </div>
    );
};

// Render React into the container
const container = document.getElementById('wrap');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
}
