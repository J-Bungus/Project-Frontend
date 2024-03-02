import { useState } from 'react';

export default function SchoolPanel({ children, school}) {
    const [isExpanded, setIsExpanded ] = useState(false);

    return (
        <div className="school-card" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="image-container">
                {children}
            </div>
            <div className="school-info">
                <h2 className="school-name">{school.name}</h2>
                <p className="school-description">{isExpanded ? school.about : (school.about.slice(0,100) + '...')}</p>
            </div>
        </div>
    );  
};