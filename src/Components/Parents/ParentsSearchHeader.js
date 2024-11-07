import { useState } from "react";
import "../../Css/ParentsSearchHeader.css"; // CSS 파일 import

function ParentsSearchHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보
  const [activeTab, setActiveTab] = useState("강사찾기"); // 현재 선택된 탭

  // 로그인 함수 (데모용)
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserInfo({ userType: "학부모", name: "홍길동" });
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  // 탭 변경 함수
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // 페이지 이동 또는 내용 전환 로직 추가 가능
  };

  return (
    <div className="search-header">
      {/* 상단 탭 메뉴 */}
      <div className="tabs">
        <button
          onClick={() => handleTabChange("강사찾기")}
          className={`tab ${activeTab === "강사찾기" ? "active" : ""}`}
        >
          강사찾기
        </button>
        <button
          onClick={() => handleTabChange("과외 신청 현황")}
          className={`tab ${activeTab === "과외 신청 현황" ? "active" : ""}`}
        >
          과외 신청 현황
        </button>
        <button
          onClick={() => handleTabChange("자녀 수업 관리")}
          className={`tab ${activeTab === "자녀 수업 관리" ? "active" : ""}`}
        >
          자녀 수업 관리
        </button>
      </div>

      {/* 로그인 상태 표시 */}
      <div className="login-section">
        {isLoggedIn ? (
          <div>
            <span>
              {userInfo.name} {userInfo.userType}님, 안녕하세요.
            </span>
            <button onClick={handleLogout} className="logout-button">
              로그아웃
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="login-button">
            로그인
          </button>
        )}
      </div>
    </div>
  );
}

export default ParentsSearchHeader;
