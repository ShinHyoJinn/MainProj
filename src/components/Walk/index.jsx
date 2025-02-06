"use client";
import React from 'react';
import "./style.css";

function Walk() {
  const [selectedTime, setSelectedTime] = useState(30);
  const [isUrgent, setIsUrgent] = useState(false);

  const timeOptions = [
    { minutes: 30, price: 18000 },
    { minutes: 60, price: 27000 },
    { minutes: 120, price: 40500 },
  ];

  return (
    <div className="walk-container">
      <header className="walk-header">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowLeft size={24} />
        </button>
        <div className="header-info">
          <div className="info-left">
            <span>GPS 정보로 함께</span>
            <span>산책 로드 확인</span>
          </div>
          <div className="divider"></div>
          <div className="info-right">
            <span>산책이 종료되면</span>
            <span>산책 카드 도착</span>
          </div>
        </div>
      </header>

      <main className="walk-content">
        <div className="time-section">
          <div className="time-header">
            <h2>산책 시간</h2>
            <span className="today-mark">오늘픽</span>
          </div>

          <div className="time-options">
            {timeOptions.map(({ minutes, price }) => (
              <button
                key={minutes}
                className={`time-option ${selectedTime === minutes ? "selected" : ""}`}
                onClick={() => setSelectedTime(minutes)}
              >
                <span className="minutes">{minutes}분</span>
                <span className="price">{price.toLocaleString()}원~</span>
              </button>
            ))}
          </div>
        </div>

        <div className="urgent-visit">
          <label className="urgent-label">
            <input type="checkbox" checked={isUrgent} onChange={(e) => setIsUrgent(e.target.checked)} />
            <span className="checkbox-text">오늘 바로 방문 원해요</span>
            <span className="additional-fee">+5,000원</span>
          </label>
        </div>

        <button className="next-button">다음으로</button>
      </main>
    </div>
  );
}

export default Walk;