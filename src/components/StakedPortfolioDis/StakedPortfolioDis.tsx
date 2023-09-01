import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, PieController, ArcElement } from 'chart.js';

Chart.register(PieController, ArcElement);

interface StakedPortfolioDisProps {
    items: { name: string; percentage: string; }[];
    heading: string;
}

const StakedPortfolioDis: React.FC<StakedPortfolioDisProps> = ({ items }) => {
    const parsedItems = items.map(item => {
        const parsedPercentage = parseFloat(item.percentage);
        return isNaN(parsedPercentage) ? 0 : parsedPercentage;
    });

    const pieData = [
        { percentage: "105.3 IV's", color: null, borderWidth: '.8rem', round: true, animate: true },
        { percentage: "", color: '#00E0C1', borderWidth: '.8rem', round: true, animate: true },
        { percentage: '', color: '#70CEF8', borderWidth: '.8rem', round: true, animate: true },
        { percentage: '', color: '#FEB800', borderWidth: '.8rem', round: true, animate: true },
        { percentage: '', color: '#707070', borderWidth: '.8rem', round: true, animate: true },
        { percentage: '', color: '#FC52B6', borderWidth: '.8rem', round: true, animate: true },
    ];

    const spditemssout = [
        { name: "GEMS", value: 40.2, percentage: "", Sign: "+" },
        { name: "ROCK", value: 13.2, percentage: "", Sign: "+" },
        { name: "GOLD", value: 1, percentage: "", Sign: "-" },
        { name: "WOOD", value: 16.9, percentage: "", Sign: "+" },
        { name: "SILVER", value: 4, percentage: "", Sign: "-" },
    ];

    return (
        <div className="staked-portfolio-dis">
            <div className="column">
                <h2>Stacked Portfolio Distribution</h2>
            </div>

            <div className="column">
                <div className='piechart'>
                    {pieData.map((pie, index) => (
                        <div
                            key={index}
                            className={`pie pie${index + 0} ${!pie.round ? 'no-round' : ''} ${pie.animate ? 'animate' : ''}`}
                            style={{
                                '--p': pie.percentage,
                                '--c': pie.color,
                                '--b': pie.borderWidth
                            } as any}
                        >
                            {pie.percentage}
                        </div>
                    ))}
                </div>
            </div>

            <div className="column">
                <ul className="list-group ">
                    {spditemssout.map((item, index) =>
                        <li className={`list-group-item stackeditem${index + 1}`} key={index}>

                            <span>{item.name},</span>
                            <span>
                                <img
                                    src={item.Sign === '-' ? 'src/assets/TriangleDown.png' : 'src/assets/TriangleUp.png'}
                                    className='top-right-image'
                                    alt='Description of the Image'
                                />
                                {item.value}%
                            </span>
                        </li>
                    )}
                </ul>
            </div>

            <div className="column column-btn-dark">
                <button type="button" className="btn btn-dark">View All</button>
            </div>
        </div>
    );
};

export default StakedPortfolioDis;
