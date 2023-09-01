import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setRender(false), 2000); // match the duration in the CSS transition
        }, 5000); // just for demo, remove loading screen after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return shouldRender ? (
        <section className={`center ${isLoading ? '' : 'fade-out'}`}>
            <div className="load1 center">
                <div className="load2 center">
                    <div className="load3 center">
                        <div className="load4 center">
                            <div className="load5 center">
                                <div className="load6 center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="invotext">
                <img src="./src/assets/Invo_logo66.png" alt="Invo Logo" />
            </span>
        </section>
    ) : null;
};

export default LoadingComponent;
