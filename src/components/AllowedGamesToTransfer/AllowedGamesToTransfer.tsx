import React from 'react';

const AllowedGamesToTransfer = () => {
    const items = [
        { src: './src/assets/FarCry.png', alt: 'Image 1', text: ' Far Cry' },
        { src: './src/assets/Anno.png', alt: 'Image 2', text: 'Anno 2205' },
        { src: './src/assets/snowrunner.png', alt: 'Image 1', text: 'Snow Runner' },
        { src: './src/assets/fortnite.png', alt: 'Image 1', text: 'Fortnite' },
        { src: './src/assets/borderlands.png', alt: 'Image 1', text: 'Borderlands' },
        { src: './src/assets/rocket.png', alt: 'Image 1', text: 'Rocket League' },
        { src: './src/assets/gta.png', alt: 'Image 1', text: 'Grand Theft Auto 6' },
        { src: './src/assets/AC_Valhalla.png', alt: 'Image 1', text: 'A C Valhalla' },
        { src: './src/assets/last_add_Icon.png', alt: 'Image 1', text: 'Add Game' },
    ];

    return (
        <div>
            <div className='row'>
                <div className='column'>
                    <h2>Games Player's Are Allowed To Transfer To</h2>
                </div>
            </div>
            <div className='row'>
                <div className='column p-0'>
                    <ul className='list-group'>
                        {items.map((item, index) =>
                            <li className='list-group-item' key={index}>
                                <img src={item.src} alt={item.alt} />
                                <p>{item.text}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllowedGamesToTransfer;
