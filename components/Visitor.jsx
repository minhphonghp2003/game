// src/VisitorCounter.js
"use client"
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust the server URL accordingly

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    console.log(visitorCount);
    useEffect(() => {
        socket.on("visitorCount", count => {
            setVisitorCount(count);
        })

    }, []);

    return (
        <div>
            <h2>Real-Time Visitor Count: {visitorCount}</h2>
        </div>
    );
};

export default VisitorCounter;
