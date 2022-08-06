import React, { Fragment, useState, useEffect } from "react";
import classes from "./App.module.css";

const App = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  // useEffect(() => {
  //   const secondInterval = setInterval(() => {
  //     setSecond((prevSecond) => prevSecond + 1);
  //   }, 1000);

  //   const minuteInterval = () => {
  //     if (second === 10) {
  //       setMinute((prevMinute) => prevMinute + 1);
  //     }
  //   };
  //   const hourInterval = () => {
  //     if (minute === 2) {
  //       setHour((prevHour) => prevHour + 1);
  //     }
  //   };
  //   return () => {
  //     clearInterval(secondInterval);
  //     minuteInterval();
  //     hourInterval();
  //   };
  // }, [second, minute]);

  /*if (second === 11) {
    setSecond(0);
  }
  if (minute === 3) {
    setMinute(0);
  }
  if (hour === 2) {
    setHour(0);
    setMinute(0);
    setSecond(0);
  }

  const minuteInterval = () => {
    if (second === 10) {
      setMinute((prevMinute) => prevMinute + 1);
    }
  };
      
  const hourInterval = () => {
    if (minute === 2) {
      setHour((prevHour) => prevHour + 1);
  }

  const playHandler = () => {
    setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    minuteInterval();
    hourInterval();
  };

  const resetHandler = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  const pauseHandler = () => {};*/

  const playHandler = () => {
    setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
    console.log(second);
    if (second === 10) {
      setMinute((prevMinute) => prevMinute + 1);
      setSecond(0);
    }
    if (minute === 2) {
      setHour((prevHour) => prevHour + 1);
    }
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div>{`${hour}:`}</div>
        <div>{`${minute}:`}</div>
        <div>{`${second}`}</div>
      </div>
      <div className={classes.container}>
        <button onClick={playHandler}>play</button>
        {/*<button onClick={pauseHandler}>pause</button>
        <button onClick={resetHandler}>reset</button>*/}
      </div>
      <h1>{`${hour}:${minute}:${second}`}</h1>
    </Fragment>
  );
};

export default App;
