import React, { useState, useEffect } from 'react';

const MainScreen = () => {
    const [text, setText] = useState('');
    const [again, setAgain] = useState(0);
    const [firstItration, setFirstIteration] = useState(true)


    useEffect(() => {
        const timeouts = [
            setTimeout(() => setText('developer'), 0),
            setTimeout(() => setText('student'), firstItration ? 5000 : 3000),
            setTimeout(() => setText('horrible web designer'), firstItration ? 8000 : 6000),
            setTimeout(() => setFirstIteration(false), 11000)
        ];

        const interval = setInterval(() => {
            setAgain(again => again + 1);
        }, firstItration ? 11000 : 9000);

        // Clear the timeouts and the interval when the component unmounts
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
            clearInterval(interval);
        };
    }, [again, firstItration]);

    return (
        <div className="mainScreen--container">
            <span className="text main--text"> Hey, i'm Yan and I'm a</span>
            <span className="text secondary--text">{text}</span>
        </div>
    );
};

export default MainScreen;

