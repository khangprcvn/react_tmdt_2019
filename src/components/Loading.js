import React from 'react';
import loadPicture from '../img/loading.gif';
const Loading = () =>
    <div style={{
        position: 'fixed',
        top: 0,
        left: '60%',
        // transform: 'translate(-50%, 50%)',
        display: 'inline-block',
        marginTop: '10%',
        zIndex: 2000
    }}>
        <img src={loadPicture} alt="loading"/>
    </div>;

export default Loading;