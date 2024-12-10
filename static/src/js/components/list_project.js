import React, { useEffect, useState } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/my/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <h1>Project Portal</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <strong>{project.name}</strong> - {project.status}
                        <br />
                        Last Deployment: {project.last_deployment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
