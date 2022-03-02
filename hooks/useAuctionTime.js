import {useState, useEffect} from 'react';

const useAuctionTime = endTime => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let days, minutes, seconds;

    // Get today's date and time
    const countDownDate = new Date(endTime).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      // Time calculations for days, month, minutes and seconds
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Updated time for timer with min, sec, hours
      const totalSeconds = Math.floor((countDownDate - now) / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      const hoursRem = totalHours - totalDays * 24;
      setSec(seconds);
      setMin(minutes);
      setHour(hoursRem);
      setDay(days);

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      setSec(seconds);
      setMin(minutes);
      setHour(days * 24);
      setDay(days);
      clearInterval(timer);
    };
  }, []);

  return {
    day,
    hour,
    min,
    sec,
  };
};

export default useAuctionTime;
