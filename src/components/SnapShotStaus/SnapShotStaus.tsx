// Import the useState hook from React. This hook lets you add state to your function components.
import React, { useState } from 'react';

interface ISnapShotStausProps {
  items: Array<{ name: string; value: number }>;
}

interface PriceItem {
  sign: string;
  value: number | string;
  symble: string;
  percentage: number;
}

const formatNumber = (num: number) => {
  const absNum = Math.abs(num);
  if (absNum >= 1000000) return (absNum / 1000000).toFixed(1) + 'M';
  else if (absNum >= 1000) return (absNum / 1000).toFixed(1) + 'K';
  else return num.toString();
};

const SnapShotStaus: React.FC<ISnapShotStausProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const prices: PriceItem[] = [
    { sign: '+', value: 3127968, percentage: 39, symble: '%' },
    { sign: '-', value: 119919, percentage: 4, symble: '%' },
    { sign: '+ ', value: 54681, percentage: 3.1, symble: '%' },
    { sign: '-', value: 7829, percentage: 1, symble: '%' },
    { sign: '+', value: 990.1, percentage: 1.3, symble: '%' },
    { sign: '+', value: 7649968, percentage: 3, symble: '%' },
  ];

  return (
    <>
      <ul className="list-group SnapShotStaus">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="p-name">{item.name}</div>

            {prices[index] && (
              <div
                className={`p-price ${
                  prices[index].sign === '-' ? 'p-price-negative' : ''
                }`}
              >
                <div className="price-value">
                  <span>$ {formatNumber(Number(item.value))}</span>{' '}
                  {/* Display the formatted value from item */}
                </div>
                <div className="price-sign">
                  <img
                    src={
                      prices[index].sign === '-'
                        ? 'src/assets/TriangleDown.png'
                        : 'src/assets/TriangleUp.png'
                    }
                    className="top-right-image"
                    alt="Description of the Image"
                  />
                  <span>{prices[index].percentage}</span>
                  <span>{prices[index].symble}</span>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SnapShotStaus;
