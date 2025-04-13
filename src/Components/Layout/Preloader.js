import React from 'react';
import { Container } from 'react-bootstrap';

const LoadingIndicator = ({ loading }) => {
    return (
        <div
            style={{ opacity: loading ? 1 : 0, zIndex: loading ? 9999 : -1 }}
            className="preloader"
        >
            <Container className="text-center position-relative">
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            </Container>
        </div>
    );
};

export default LoadingIndicator;
