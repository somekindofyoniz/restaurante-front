import React from 'react';
import './BasicLayout.scss';
//props will receib site content
export function BasicLayout(props) {
    const { children } = props;
    return (
        <div>
            <h2>Basic Layout</h2>
            {/* Get all the page content and wrap in children */}
            {children}
        </div>
    )
}
