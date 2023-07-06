import React, { useState, useEffect } from 'react';
// import TodoList from '../src/ещвщ/todo';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodoList from '../ещвщ/todo';
const Pomodoro = () => {

  const [timer, setTimer] = useState(null); // Таймер
  const [sessionLength, setSessionLength] = useState(25); // Длительность работы в минутах
  const [breakLength, setBreakLength] = useState(5); // Длительность короткого перерыва в минутах
  const [longBreakLength, setLongBreakLength] = useState(30); // Длительность длительного перерыва в минутах
  const [isBreak, setIsBreak] = useState(false); // Флаг для определения, является ли текущий период перерывом
  const [isLongBreak, setIsLongBreak] = useState(false); // Флаг для определения, является ли текущий период длительным перерывом
  const [time, setTime] = useState(sessionLength * 60);
  const [showSettings, setShowSettings] = useState(false); // Флаг для отображения/скрытия настроек

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    if (time === 0) {
      // Если время истекло
      clearInterval(timer);

      if (isBreak) {
        setIsBreak(false);

        if (isLongBreak) {
          setIsLongBreak(false);
          setTime(sessionLength * 60); // Время работы после длительного перерыва
        } else {
          setTime(breakLength * 60); // Время работы после короткого перерыва
        }
      } else {
        setIsBreak(true);
        setTime(longBreakLength * 60); // Время длительного перерыва

        if (time === 0) {
          setIsLongBreak(true);
        }
      }
    }
  }, [time, isBreak, isLongBreak, sessionLength, breakLength, longBreakLength]);

  const startTimer = () => {
    setTimer(setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000));
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };
  const buh = () => {
    setSessionLength(25);
    setBreakLength(5);
    setLongBreakLength(30);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setIsBreak(false);
    setIsLongBreak(false);
    setTime(sessionLength * 60);
  };

  const handleBreakType = (isLong) => {
    if (isLong) {
      setIsBreak(true);
      setIsLongBreak(true);
      setTime(longBreakLength * 60);
    } else {
      setIsBreak(true);
      setIsLongBreak(false);
      setTime(breakLength * 60);
    }
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const incrementSessionLength = () => {
    setSessionLength(prevLength => prevLength + 1);
  };

  const decrementSessionLength = () => {
    setSessionLength(prevLength => (prevLength > 1 ? prevLength - 1 : prevLength));
  };

  const incrementBreakLength = () => {
    setBreakLength(prevLength => prevLength + 1);
  };

  const decrementBreakLength = () => {
    setBreakLength(prevLength => (prevLength > 1 ? prevLength - 1 : prevLength));
  };

  const incrementLongBreakLength = () => {
    setLongBreakLength(prevLength => prevLength + 1);
  };

  const decrementLongBreakLength = () => {
    setLongBreakLength(prevLength => (prevLength > 1 ? prevLength - 1 : prevLength));
  };

  return (
    <div className='timer-container '>

      <ul className='wrapper'>

        <li className="n facebook">
          <a href="https://www.facebook.com/kutman.orumbekov?mibextid=ZbWKwL">
            <FacebookIcon color="action" />
            <span class="tooltip">Facebook</span>
            <span><i className="fab fa-facebook-f"></i></span>
          </a>
        </li>
        <li class="n twitter">
          <a href="https://wa.me/qr/2JFVU3L2N5IJH1">
            <WhatsAppIcon color="action" />
            <span class="tooltip">WhatsApp</span>
            <span><i class="fab fa-twitter"></i></span></a>
        </li>
        <li class="n github">
          <a href="https://github.com/kutman2007">
            <GitHubIcon color="action" />
            <span class="tooltip">Github</span>
            <span><i class="fab fa-github"></i></span>
          </a>

        </li>
        <li class="n youtube">
          <a href="https://youtube.com/@dindon9617">
            <YouTubeIcon color="action" />
            <span class="tooltip">Youtube</span>
            <span><i class="fab fa-youtube"></i></span>
          </a>
        </li>

      </ul>
      <h1 className='animate__animated animate__bounce'>Pomodoro Timer</h1>



      <div className={`settings-icon ${showSettings ? 'active' : ''}`} onClick={toggleSettings}>
        {showSettings ? <CloseIcon sx={{ fontSize: 40 }} /> : <SettingsIcon sx={{ fontSize: 40 }} />}

      </div>
      <div class="container">
        <div class="btn"><a href="#" onClick={startTimer}><PlayCircleFilledWhiteIcon sx={{ fontSize: 40 }} /></a></div>
        <div class="btn"><a href="#" onClick={stopTimer}><StopCircleIcon sx={{ fontSize: 40 }} /></a></div>
        <div class="btn"><a href="#" onClick={resetTimer} ><RestartAltIcon sx={{ fontSize: 40 }} /></a></div>
      </div>
      <li>
        <a className='prom' href="https://worksection.com/blog/pomodoro_time_management.html">What  is Promodoro?</a>
      </li>
      <div className='block'>
        {showSettings && (
          <div className="settings">
            <div className="setting-item">
              <label>Session Length:</label>
              <div className="length-control">
                <button onClick={decrementSessionLength}>-</button>
                <span>{sessionLength}</span>
                <button onClick={incrementSessionLength}>+</button>
              </div>
              <button className='asd' onClick={resetTimer}>Promodoro</button>
            </div>
            <div className="setting-item">
              <label>Break Length:</label>
              <div className="length-control">
                <button onClick={decrementBreakLength}>-</button>
                <span>{breakLength}</span>
                <button onClick={incrementBreakLength}>+</button>
              </div>
              <button className='asd' onClick={() => handleBreakType(false)}>Short Break</button>
            </div>
            <div className="setting-item">
              <label>Long Break Length:</label>
              <div className="length-control">
                <button onClick={decrementLongBreakLength}>-</button>
                <span>{longBreakLength}</span>
                <button onClick={incrementLongBreakLength}>+</button>
              </div>
              <button className='asd' onClick={() => handleBreakType(true)}>Long Break</button>
            </div>
            <button className="reset-button" onClick={buh}>Reset</button>
          </div>
        )}

        <h2>{isBreak ? (isLongBreak ? 'Long Break' : 'Break') : 'Work'}</h2>


        <h3>{formatTime(time)}</h3>

      </div>
      <TodoList />

    </div>
  );
};

export default Pomodoro;