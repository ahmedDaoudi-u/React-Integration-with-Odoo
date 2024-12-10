import React from 'react';
import { createRoot } from 'react-dom/client';
import ProjectList from './components/ProjectList';

const container = document.getElementById('react-container');
if (container) {
    const root = createRoot(container);
    root.render(<ProjectList />);
}
