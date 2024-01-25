import React, { useState } from 'react';

function Panel({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="panel border-1 border-black p-2.5">
            <button onClick={togglePanel}>
                {isOpen ? 'Hide' : 'Show'}
            </button>
            {isOpen && <div>{children}</div>}
        </div>
    );
}

export default Panel;