import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface PriceItem {
    sign: string;
    value: number | string;
    symble: string;
}
const data = [
    { name: 'Jan', Game_Economy_Balance: 4000, Game_Transaction: 2400, amt: 2400 },
    { name: 'Feb', Game_Economy_Balance: 3000, Game_Transaction: 1398, amt: 2210 },
    { name: 'Apr', Game_Economy_Balance: 2000, Game_Transaction: 9800, amt: 2290 },
    { name: 'May', Game_Economy_Balance: 2780, Game_Transaction: 3908, amt: 2000 },
    { name: 'Mar', Game_Economy_Balance: 1890, Game_Transaction: 4800, amt: 2181 },
    { name: 'Jun', Game_Economy_Balance: 2390, Game_Transaction: 3800, amt: 2500 },
    { name: 'July', Game_Economy_Balance: 3490, Game_Transaction: 4300, amt: 2100 },
];
const items = [
    { src: './src/assets/Add_Icon.png', alt: 'Image 1', name: 'Add Game', value: '' },
    { src: './src/assets/fortnite.png', alt: 'Image 1', name: 'Fortnite', value: '396k' },
    { src: './src/assets/borderlands.png', alt: 'Image 1', name: 'Borderlands', value: '396k' },
    { src: './src/assets/rocket.png', alt: 'Image 1', name: 'Rocket League', value: '396k' },
    { src: './src/assets/gta.png', alt: 'Image 1', name: 'Grand Theft Auto 6', value: '396k' },
    { src: './src/assets/snowrunner.png', alt: 'Image 1', name: 'Snow Runner', value: '396k' },
    // Add more items as needed
];
const StakingChart = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 maincalcnumbercol">
                    <p>Your Available Balance</p>
                    <div className="row">
                        <div className="col-10 mainnum">$ <span>97,900.62</span></div>
                        <div className="col-2 maincalc">15%
                            <img src='src/assets/Up.png' className='top-right-image2' alt='Description of the Image' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-start">
                    <button type="button" className="btn btn-outline-dark btn-outline-dark-restaking">Stak Into This Game</button>
                    <button type="button" className="btn btn-dark btn-dark-staking">Stak Into Another Game</button>
                </div>
            </div>
            <div className="row mainlinechart">
                <div className="row">
                    <div className="col">
                        <p>Game Balance History</p>
                    </div>
                    <div className="col d-flex align-items-center">
                        <p>Show Period:</p>
                        <select className="form-select ml-2" aria-label="Default select example">
                            <option selected>Last 30 days</option>
                            <option value="1">Last 60 days</option>
                            <option value="2">Last 90 days</option>
                            <option value="3">Last 120 days</option>
                        </select>
                    </div>
                </div>

                <div className="col mainlinechart">
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" tick={{ fill: '#fff' }} />
                            <YAxis yAxisId={0} tick={{ fill: '#fff' }} />
                            <YAxis yAxisId={1} orientation="right" tick={{ fill: '#fff' }} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Game_Economy_Balance" stroke="#ff7300" yAxisId={0} />
                            <Line type="monotone" dataKey="Game_Transaction" stroke="#0EDFC1" yAxisId={1} />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="row">
                <div className="col games-section">
                    <div className="d-flex flex-wrap">
                        {items.map((item, index) => (
                            <div className="p-2 game-list-group-item">
                                <li className="list-group-item ">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src={item.src} className={index === 0 ? 'top-left-image first-image' : 'top-left-image'} alt={item.alt} />
                                        </div>
                                        <div className="col-8">
                                            <p className={index === 0 ? 'game-name first-game-name' : 'game-name'}>{item.name}</p>
                                            <p className='ecom-value'>{item.value}</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingChart;
