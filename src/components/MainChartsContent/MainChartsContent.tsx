import React, { useState } from 'react';

type AccordionItems = 'item1' | 'item2' | 'item3';

const MainChartsContent = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');


    const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue1(event.target.value);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue2(event.target.value);
    };

    const data = [
        { name: 'Fortnit …', date: '02.05.2018', amount: '$9,681.63', fee: '-$30' },
        { name: 'Grant T…', date: '02.05.2018', amount: '$23,900', fee: '-$30' },
        { name: 'A.C Val …', date: '02.05.2018', amount: '$10,000', fee: '-$30' },
        { name: 'Rocket …', date: '02.05.2018', amount: '$13,903', fee: '-$30' },
        { name: 'Fortnit …', date: '02.05.2018', amount: '$17,000', fee: '-$30' },
        { name: 'Fortnit …', date: '02.05.2018', amount: '$25,000', fee: '-$30' },
        { name: 'Cell', date: '02.05.2018', amount: '$15,000', fee: '-$30' },
        { name: 'Grant T…', date: '02.05.2018', amount: '$30,000', fee: '-$30' },
        { name: 'Far Cry…', date: '02.05.2018', amount: '$11,750', fee: '-$30' },
        { name: 'Anno 2205', date: '02.05.2018', amount: '$35,250', fee: '-$30' },
    ];

    return (
        <div className="container p-0">
            <div className="row">
                <div className="col withdrawal">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button">
                                    Withdrawal Request
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne">
                                <div className="accordion-body">
                                    {/* Your content for item 1 */}
                                    <div className="container p-0">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="basic-url1" className="form-label">From:</label>
                                                <div className="input-group mb-3">
                                                    <select className="form-select" aria-label="Default select example" value={value1} onChange={handleChange1}>
                                                        <option value="">Fortnite</option>
                                                        <option value="1">Borderlands</option>
                                                        <option value="2">Rocket League</option>
                                                        <option value="3">Grand Theft Auto 6</option>
                                                        <option value="4">Snow Runner</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="basic-url2" className="form-label">To:</label>
                                                <div className="input-group mb-3">
                                                    <select className="form-select" aria-label="Default select example" value={value2} onChange={handleChange2}>
                                                        <option value="">Corporate Account</option>
                                                        <option value="1">Pay Pal</option>
                                                        <option value="2">Stripe</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="basic-url1" className="form-label">Price Per IV:</label>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" id="exampleFormControlInput11" placeholder="$4.59" value="" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="basic-url2" className="form-label">Amount:</label>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" id="ex3" placeholder="..." value="" />
                                                    </div>
                                                </div>

                                            </div>

                                            <button type="button" className="btn btn-outline-primary invo-btn-outline-primary">Withdraw Now</button>

                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button" type="button">
                                    Withdrawal History
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo">
                                <div className="accordion-body">
                                    {/* Your content for item 2 */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Type</th>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th>Fee</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="invo-name">{item.name}</td>
                                                        <td className="invo-date">{item.date}</td>
                                                        <td className="invo-amount">{item.amount}</td>
                                                        <td className="invo-fee">{item.fee}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-dark">View More…</button>
                            <hr />
                        </div>
                        {/*<div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button" type="button">
                                    Get an Invo Verified Account
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree">
                                <div className="accordion-body">
                                     Your content for item 3 
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainChartsContent;
