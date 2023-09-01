import React from 'react';
import "./sidetopthree.css";

interface SideTopThreeProps {
    title: string;
    amount: number;
    rate: number;
    image: string;
}

const SideTopThree: React.FC<SideTopThreeProps> = ({ image, title, rate, amount }) => {
    return <div className='SideTopThree'>
        <img src={image} alt='image' />
        <div className='SideTopThree-info'>
            <p>{title}</p>
            <p><span>{rate}</span>IV <span> = {amount}</span></p>
        </div>
    </div>
}

export default SideTopThree;