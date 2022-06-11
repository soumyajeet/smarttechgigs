import React from 'react';

export default function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center">
            <footer className="row text-dark p-2">
                <span className='text-center'>Copyright © {getCurrentYear()} megadigitalmart. All Rights Reserved.</span>
                
            </footer>
        </div>
    )
}
