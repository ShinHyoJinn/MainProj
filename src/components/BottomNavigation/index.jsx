import React, { useState } from "react";
import "./style.css";

function BottomNavigation() {
  const [activeItem, setActiveItem] = useState(""); // 클릭된 항목을 관리

  const handleClick = (item) => {
    setActiveItem(item); // 클릭된 항목을 활성화 상태로 설정
    console.log(`${item} 클릭됨`);
  };

  return (
    <div className="bottom-navigation">
      <div
        className={`nav-item ${activeItem === "예약하기" ? "active" : ""}`}
        onClick={() => handleClick("예약하기")}
      >
        <img src="/bottomnavigationicons/booking.png" alt="예약하기" className="nav-icon" />
        <span>예약하기</span>
      </div>
      <div
        className={`nav-item ${activeItem === "예약내역" ? "active" : ""}`}
        onClick={() => handleClick("예약내역")}
      >
        <img src="/bottomnavigationicons/history.png" alt="예약내역" className="nav-icon" />
        <span>예약내역</span>
      </div>
      <div
        className={`nav-item ${activeItem === "라이브" ? "active" : ""}`}
        onClick={() => handleClick("라이브")}
      >
        <img src="/bottomnavigationicons/live.png" alt="라이브" className="nav-icon" />
        <span>라이브</span>
      </div>
      <div
        className={`nav-item ${activeItem === "발도장" ? "active" : ""}`}
        onClick={() => handleClick("발도장")}
      >
        <img src="/bottomnavigationicons/paw.png" alt="발도장" className="nav-icon" />
        <span>발도장</span>
      </div>
      <div
        className={`nav-item ${activeItem === "프로필" ? "active" : ""}`}
        onClick={() => handleClick("프로필")}
      >
        <img src="/bottomnavigationicons/profile.png" alt="프로필" className="nav-icon" />
        <span>프로필</span>
      </div>
    </div>
  );
}

export default BottomNavigation;
