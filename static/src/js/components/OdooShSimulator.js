import React, { useState } from 'react';

const OdooShSimulator = () => {
    // State for demo data
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project Alpha', status: 'Active', lastDeployment: '2024-12-10' },
        { id: 2, name: 'Project Beta', status: 'Paused', lastDeployment: '2024-12-08' },
        { id: 3, name: 'Project Gamma', status: 'Active', lastDeployment: '2024-12-06' },
    ]);

    // State for notifications
    const [notifications, setNotifications] = useState([
        'Your deployment on Project Alpha succeeded!',
        'A new update is available for Project Beta.',
        'Project Gamma experienced a downtime issue.',
    ]);

    // Handle adding a new project
    const addProject = () => {
        const newProject = {
            id: projects.length + 1,
            name: `Project ${String.fromCharCode(65 + projects.length)}`,
            status: 'Active',
            lastDeployment: new Date().toISOString().split('T')[0],
        };
        setProjects([...projects, newProject]);
        setNotifications([...notifications, `${newProject.name} was created successfully!`]);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <h1 style={{ color: '#4CAF50' }}>Odoo.sh Simulator</h1>

            {/* Notifications Section */}
            <div style={{ marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                <h3>Notifications</h3>
                <ul>
                    {notifications.map((note, index) => (
                        <li key={index} style={{ marginBottom: '5px', color: '#555' }}>
                            {note}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Projects Section */}
            <div>
                <h2>Projects</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f1f1f1' }}>ID</th>
                            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f1f1f1' }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f1f1f1' }}>Status</th>
                            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f1f1f1' }}>Last Deployment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{project.id}</td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{project.name}</td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '10px',
                                        color: project.status === 'Active' ? '#4CAF50' : '#f44336',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {project.status}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{project.lastDeployment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={addProject}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Add New Project
                </button>
            </div>
        </div>
    );
};

export default OdooShSimulator;
