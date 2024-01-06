import React, { useEffect, useMemo, useState } from "react";
import Countdown from "../../components/Countdown";

const LaunchCountdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-02-06T18:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        pastDue: true,
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Countdown prev={0} count={time.days} label={"Dias"} key={"1"} />
      <Countdown prev={0} count={time.hours} label={"Horas"} />
      <Countdown prev={0} count={time.minutes} label={"Minutos"} />
      <Countdown prev={0} count={time.seconds} label={"Segundos"} />
    </>
  );
};

export default LaunchCountdown;
