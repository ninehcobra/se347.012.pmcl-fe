'use client'
import { useEffect, useState } from "react";

const CountDown = (params) => {
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(params.startDate, params.endDate));

    function getTimeRemaining(startDate, endDate) {
        const currentDateTime = new Date().getTime();

        // Kiểm tra nếu chưa đến thời gian bắt đầu
        if (startDate && currentDateTime < new Date(startDate).getTime()) {
            const timeDifference = new Date(startDate).getTime() - currentDateTime;
            const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

            return {
                daysLeft,
                isNotStarted: true, // Thêm trạng thái isNotStarted khi chưa bắt đầu
            };
        }

        const targetDate = new Date(endDate).getTime();
        const timeDifference = targetDate - currentDateTime;

        // Kiểm tra nếu đã hết thời gian
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
            isNotStarted: false,
        };
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(getTimeRemaining(params.startDate, params.endDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [params.startDate, params.endDate]);

    return (
        <div>
            {timeRemaining.isNotStarted ? (
                <span>Bắt đầu sau {timeRemaining.daysLeft} ngày</span>
            ) : timeRemaining.isExpired ? (
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
