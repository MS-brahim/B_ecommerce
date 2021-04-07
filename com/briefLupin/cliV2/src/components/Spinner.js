import React from 'react';
 
const Spinner = (size) => {
    return (
        <div>
           <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export {Spinner};