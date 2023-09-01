// Import the useState hook from React. This hook lets you add state to your function components.
import React, { useState } from "react";

interface MainStatusContentProps {
    items: string[];
    heading: string;
}

interface PriceItem {
    sign: string;
    value: number | string;
    symble: string;
}

const MainStatusContent: React.FC<MainStatusContentProps> = ({ items, heading }) => {

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const prices: PriceItem[] = [
        { sign: '+', value: 9234.00, symble: '' },
        { sign: '+', value: 48.03, symble: '' },
        { sign: '+ ', value: 72, symble: '%' },
        { sign: '-', value: 5, symble: '%' },
        { sign: '+', value: 110000.00, symble: '' },
        { sign: '+', value: 15, symble: '%' }
    ];

    // The component returns a JSX fragment.
    return (
        <>
            {/* An unordered list with the CSS class "list-group". */}
            <ul className="list-group list-group-horizontal MainStatusContent">
                {items.map((item, index) =>
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={index}
                        onClick={() => setSelectedIndex(index)}>
                        <div className="p-name">{item}</div>
                        <div className={`p-price ${prices[index].sign === '-' ? 'p-price-negative' : ''}`}>
                            <span>{prices[index].sign}</span>
                            {typeof prices[index].value === 'number' ? ' $' : ''}
                            {Math.abs(Number(prices[index].value)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            <span>{prices[index].symble}</span>
                        </div>
                        <img
                            src={prices[index].sign === '-' ? 'src/assets/Down.png' : 'src/assets/Up.png'}
                            className='top-right-image'
                            alt='Description of the Image'
                        />
                    </li>
                )}
            </ul>

        </>
    );
}

export default MainStatusContent;
