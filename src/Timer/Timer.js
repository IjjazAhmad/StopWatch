import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [milisec, setMilisec] = useState(0);
    const [second, setSecond] = useState(0);
    const [mint, setMint] = useState(0);
    const [time, setTime] = useState(null);
  
    const handleStart = () => {
      if (time === null) {
        setTime(
          setInterval(() => {
            setMilisec((prevMilisec) => prevMilisec + 1);
          }, 10)
        );
      }
    };
  
    useEffect(() => {
      return () => clearInterval(time); // Clear the interval using the reference to 'time'
    }, [time]);
  
    const handleReset = () => {
      clearInterval(time); // Clear the interval using the reference to 'time'
      setTime(null);
      setMilisec(0);
      setMint(0);
      setSecond(0);
    };
  
    const handleStop = () => {
      clearInterval(time); // Clear the interval using the reference to 'time'
      setTime(null);
    };
  
    useEffect(() => {
      if (milisec === 99) {
        setSecond((prevSecond) => prevSecond + 1);
        setMilisec(0);
      }
      if (second === 59) {
        setMint((prevMint) => prevMint + 1);
        setSecond(0);
      }
    }, [ milisec, second, mint]);

    return (
        <>
            <div className="timer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className='text-center my-3'>Stopwatch</h3>
                            <div className="timer-container1">
                                <div className="timer-container">
                                    <p className='m-0 text-center'>{mint < 10 ? "0" + mint : mint}:{second < 10 ? "0" + second : second}:{milisec < 10 ? "0" + milisec : milisec}</p>
                                    <div className="buttonDiv text-center">
                                        <button className='btn btn-info ms-2' onClick={handleStart}>Start</button>
                                        <button className='btn btn-success ms-2' onClick={handleReset}>Reset</button>
                                        <button className='btn btn-danger ms-2' onClick={handleStop}>Stop</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
