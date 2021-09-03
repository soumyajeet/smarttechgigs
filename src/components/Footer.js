import React from 'react';

export default function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center">
            <footer className="row text-light bg-dark p-2">
                Copyright © {getCurrentYear()} Soumyajit. All Rights Reserved.
            </footer>
        </div>
    )
}
