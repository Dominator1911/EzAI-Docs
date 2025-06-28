import React from 'react';
import {Link} from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1>Welcome to EzAI-Docs</h1>
            <p>A tool for visualizing and documenting AI workflows</p>
            <div style={{marginTop: '20px'}}>
                <Link
                    to="/flow"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}
                >
                    Go to Flow Editor
                </Link>
            </div>
        </div>
    );
};

export default HomePage;