import { useState, useEffect } from "react";

function User() {

    const logout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    document.getElementById("timer").innerHTML = formatTime(timeLeft);
  }, [timeLeft]);

  function startTimer() {
    setTimer(
      setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            startBreakTimer();
            return prevTimeLeft;
          }
          return prevTimeLeft - 1;
        });
      }, 1000)
    );
  }

  function pauseTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    clearInterval(timer);
    setTimeLeft(1500);
  }

  function startBreakTimer() {
    setTimeLeft(300); // 5 minutes in seconds
    setTimer(
      setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            alert("Take a Break, 25 minutes is over ");
            return prevTimeLeft;
          }
          return prevTimeLeft - 1;
        });
      }, 1000)
    );
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`;
  }

  return (
    <>
    <div className="my-4">
      <div id="timer"></div>
      <button onClick={startTimer}className="btn btn-success mx-2">Start</button>
      <button onClick={pauseTimer}className="btn btn-info">Pause</button>
      <button onClick={resetTimer} className="btn btn-danger mx-2">Reset</button>
      <button className="btn btn-warning" onClick={logout}>Logout</button>
    </div>
   
    </>
  );
}

export default User;