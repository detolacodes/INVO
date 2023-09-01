import React from 'react';

const DashRecentTransaction = () => {
    const items = [
        { date: "23 May, 2018", playerName: "Dudeman23", transfer: "Transfer In", profit: "$11.40", img: "./src/assets/dudeman.png" },
        { date: "23 May, 2018", playerName: "Rampage", transfer: "Transfer Out", profit: "$9.70", img: "./src/assets/rampage.png" },
        { date: "22 May, 2018", playerName: "Slugslushie", transfer: "Transfer In", profit: "$8.33", img: "./src/assets/slugslushie.png" },
        { date: "21 May, 2018", playerName: "Atrhick", transfer: "Transfer In", profit: "$10.00", img: "./src/assets/atrhick.png" },
        { date: "21 May, 2018", playerName: "Greenlotus", transfer: "Transfer In", profit: "$3.79", img: "./src/assets/greenlotus.png" },
        { date: "20 May, 2018", playerName: "Flylady24", transfer: "Transfer Out", profit: "$0.24", img: "./src/assets/flylady24.png" },
    ];

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h2>Recent Transactions</h2>
                </div>
                <div className="col text-end-alight">
                    <label>Order By:</label>
                    <select>
                        <option>Last 30 days</option>
                        <option>Last 60 days</option>
                        <option>Last 90 days</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <ul className="list-group">
                    {items.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            <div className="row">
                                <p className="date">{item.date}</p>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <img src={item.img} alt="Avatar" />
                                </div>
                                <div className="col">
                                    <p className="playername">{item.playerName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <p className="transfer">{item.transfer}</p>
                                </div>
                                <div className="col">
                                    <p className="profit">{item.profit}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DashRecentTransaction;
