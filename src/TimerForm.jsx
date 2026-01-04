import React, { useState, useEffect, useRef } from 'react';
import toggle from '../img/8.png';
import delete1 from '../img/9.png';

const TimerForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputValue,
        seconds: 0,
      },
    ]);

    setInputValue('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          seconds: item.seconds + 1,
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTimer = () => {
    isRunning = !isRunning;
    setIsRunning(isRunning);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };
  return (
    <div className="timers__content">
      <form className="timers__form">
        <input
          type="text"
          placeholder="Timer Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="timers__submit-button button1"
          type="submit"
          onClick={handleSubmit}
        >
          Create Timer
        </button>
      </form>
      <span className="timers__line"></span>
      <ul className="timers__list">
        {items.map((item) => (
          <li key={item.id} className="timers__forms">
            <h6 className="timers__forms-title">{item.text}</h6>
            <span
              style={{ backgroundColor: 'rgb(231, 232, 234)' }}
              className="timers__forms-value"
            >
              {formatTime(item.seconds)}
            </span>
            <button
              onClick={toggleTimer}
              className="timers__forms_toggle-button timers__forms_toggle-button-paused"
            >
              <img src={toggle} alt="timer toggle" />
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="timers__forms_delete-button"
            >
              <img src={delete1} alt="delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TimerForm;
