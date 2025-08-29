import React, {useState, useEffect } from 'react'

function Clock() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect( () => {
        const timerID = setInterval( () => { setCurrentDate(new Date()); }, 1000);

        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h4>{currentDate.toLocaleTimeString()}</h4>
        </div>

    );
}

export default Clock;