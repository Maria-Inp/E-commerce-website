/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

function CountdownTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Sep 11, 2024 23:06:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = (countdownDate - now) / 1000;

      const days = Math.floor(distance / (60 * 60 * 24));
      const hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((distance % (60 * 60)) / 60);
      const seconds = Math.floor(distance % 60);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        if (seconds < 10) {
            setTimerSeconds(`0${seconds}`)
        } else {
            setTimerSeconds(seconds);
        }

        if (minutes < 10) {
            setTimerMinutes(`0${minutes}`)
        } else {
            setTimerMinutes(minutes);
        }

        setTimerDays(days);
        setTimerHours(hours);
      }
    }, 1000);
  };

  useEffect(()=>{
    startTimer();
    return () => {
        clearInterval(interval.current);
    }
  })

  return (
    <>
      <div>
        <span>Days</span>
        <h3>{timerDays}</h3>
      </div>
      <div>:</div>
      <div>
        <span>Hours</span>
        <h3>{timerHours}</h3>
      </div>
      <div>:</div>
      <div>
        <span>Minutes</span>
        <h3>{timerMinutes}</h3>
      </div>
      <div>:</div>
      <div>
        <span>Seconds</span>
        <h3>{timerSeconds}</h3>
      </div>
    </>
  );
}

export default CountdownTimer;
