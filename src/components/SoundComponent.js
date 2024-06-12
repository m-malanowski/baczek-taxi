// src/components/HornSound.js
import React, { useEffect } from 'react';
import { Howl } from 'howler';

const HornSound = ({ src, play }) => {
    useEffect(() => {
        const hornSound = new Howl({
            src: [src],
            onload: () => console.log("Sound loaded successfully"),
            onloaderror: (id, error) => console.log("Sound loading error:", error),
        });

        if (play) {
            hornSound.play();
        }

        return () => {
            hornSound.unload();
        };
    }, [src, play]);

    return null;
};

export default HornSound;
