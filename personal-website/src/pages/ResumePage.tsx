import React from 'react';

function ResumePage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <iframe
                src="/LinhPhamResume.pdf"
                title="Linh Pham Resume"
                style={{
                    width: '80%',
                    height: '90%',
                    border: 'none',
                }}
            />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a
                    href="/LinhPhamResume.pdf"
                    download="LinhPhamResume.pdf"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default ResumePage;