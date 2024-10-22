// RandomItem.jsx
import React, { useState, useEffect } from 'react';

const images = [
    { src: 'pics/pappadam.jpeg', alt: 'Product1' },
    { src: 'pics/samosa.jpg', alt: 'Product2' },
    { src: 'pics/pakora.jpg', alt: 'Product3' },
    { src: 'pics/springroll.jpg', alt: 'Product4' },
    { src: 'pics/Chicken-Pakora.jpg', alt: 'Product5' },
    { src: 'pics/drumstick.jpg', alt: 'Product6' }
];

const RandomItem = () => {
    const [randomImage, setRandomImage] = useState(null);

    useEffect(() => {
        getRandomItem();
    }, []);

    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex]);
    };

    return (
        <div id="randomitems">
            {randomImage ? (
                <img
                    src={randomImage.src}
                    alt={randomImage.alt}
                    width="100"
                    height="200"
                />
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
};

export default RandomItem;
