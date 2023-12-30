'use client'

import { useEffect, useState } from "react";

const CountDown = (params) => {
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(params.endDate));

    function getTimeRemaining(endDate) {
        const targetDate = new Date(endDate).getTime();
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                isExpired: true, // Thêm trạng thái isExpired khi đã hết thời gian
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
            isExpired: false,
        };
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(getTimeRemaining(params.endDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [params.endDate]);

    return (
        <div>
            {timeRemaining.isExpired ? (
                <span>Đã kết thúc</span>
            ) : (
                <span>
                    {timeRemaining.days}d : {timeRemaining.hours}h : {timeRemaining.minutes}m : {timeRemaining.seconds}s
                </span>
            )}
        </div>
    );
};

export default CountDown;
