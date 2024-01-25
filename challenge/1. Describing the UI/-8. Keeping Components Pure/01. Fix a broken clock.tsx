import React from 'react';
export default function Clock({ time }) {
    // props, time 傳進來, 但不要修改直接修改 time, 將 time 存到變數裡
    const hours = time.getHours();
    let dayAndNight: string;
    const formatTime = time.toLocaleTimeString()

    if (hours >= 0 && hours <= 6) {
        // document.getElementById('time').className = 'night';
        dayAndNight = 'night';
    } else {
        // document.getElementById('time').className = 'day';
        dayAndNight = 'day';
    }
    return (
        //  <h1 id="time"> 不要直接使用 id, 使用 className
        <h1 className={dayAndNight}>
            {formatTime}
        </h1>
    );
}
