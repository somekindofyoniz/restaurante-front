import React from 'react';
import './ClientLayout.scss';
//props will receib site content
export function ClientLayout(props) {
    const { children } = props;
    return (
        <div>
            <h2>Client Layout</h2>
            {/* Get all the page content and wrap in children */}
            {children}
        </div>
    )
}
