import { useNavigate } from "react-router-dom"
import "./style.css"

function ResultLast() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate("/ProfilePage")
  }

  return (
    <div className="resultlast-container">
      {/* 헤더 */}
      <header className="resultlast-header">
        <div className="header-content">
          <img src="/resultlasticons/back.png" alt="뒤로가기" className="back-icon" onClick={handleBackClick} />
          <h1>지난산책리포트</h1>
        </div>
      </header>
    </div>
  )
}

export default ResultLast

