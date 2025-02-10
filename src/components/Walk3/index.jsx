"use client";
import { useNavigate } from "react-router-dom";
import "./Walk3.css";

export default function Walk3() {
  const navigate = useNavigate();

  return (
    <div className="Walk3-walk3-container">
      {/* Header Section */}
      <div className="Walk3-header">
        <button className="Walk3-back-button" onClick={() => navigate("/Walk2Page")}>←</button>
        <h1 className="Walk3-title">
          방문 날짜를
          <br />
          선택해주세요
        </h1>
      </div>

      {/* Calendar Section */}
      <div className="Walk3-calendar-section">
        {/* Month Selector */}
        <div className="Walk3-month-selector">
          <button className="Walk3-month-arrow">‹</button>
          <span className="Walk3-month-text">2025년 2월</span>
          <button className="Walk3-month-arrow">›</button>
        </div>

        <div className="Walk3-calendar">
          {/* Weekdays */}
          <div className="Walk3-weekdays">
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <div key={day} className="Walk3-weekday">
                {day}
              </div>
            ))}
          </div>

          {/* Dates Grid */}
          <div className="Walk3-dates">
            {[...Array(5)].map((_, weekIndex) => (
              <div key={weekIndex} className="Walk3-week">
                {[...Array(7)].map((_, dayIndex) => (
                  <button
                    key={`${weekIndex}-${dayIndex}`}
                    className="Walk3-date"
                  >
                    {weekIndex * 7 + dayIndex + 1}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="Walk3-bottom-section">
        <div className="Walk3-bottom-content">
          <p className="Walk3-confirm-text">
            방문 날짜를
            <br />
            확인해주세요
          </p>
          <button
            className="Walk3-next-button"
            onClick={() => navigate("/NextPage")}
          >
            다음으로
          </button>
        </div>
      </div>
    </div>
  );
}
