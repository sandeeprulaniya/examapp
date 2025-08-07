import React, { useEffect, useState } from 'react'

const Timer = () => {

  const [time, setTime] = useState(1000);
  

  function formatTime(time) {

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    const tempTime = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`

    return tempTime

  }
  useEffect(() => {

    const interval = setInterval(() => {

      setTime((prev) => {
        return prev > 0 ? prev - 1 : 0
      })

      

    }, 1000)


    return function(){
        console.log("timer unmounted");
        clearInterval(interval);
      }

  }, [])

  return (
    <div className='timerdiv'>
      <h2>Time Left : </h2>
      <h3>{formatTime(time)}</h3>
    </div>
  )
}

export default Timer
