import React, {useEffect} from 'react';

const IntervalComponent = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(`Interval tick`); }, 1000);

        return () => {
            clearInterval(timer); // cleanup interval on unmount
        };
    }, []);

    return (
        <>
            <h1>Component with Interval</h1>
            <p>open the browser console to see 'interval tick' with Cmd+Opt+K</p>
        </>
    );
}
export default IntervalComponent;

/*

    This component demonstrates how to use the `useEffect` hook to manage "side effects"
    that need to be cleaned up when a component is no longer in use.
     - `useEffect` is used to start the timer (`setInterval`).
     - The function returned by `useEffect` is the cleanup function.
    - The cleanup function (`clearInterval`) stops the timer to prevent a memory leak
    when the component unmounts (is removed from the screen).
 */