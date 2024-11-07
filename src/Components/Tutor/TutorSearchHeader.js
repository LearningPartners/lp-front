import { useState } from "react";
import "../../Css/TutorSearchHeader.css";

function TutorSearchHeader(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보
  const [activeTab, setActiveTab] = useState("수업일정관리"); // 현재 선택된 탭

  // 로그인 함수 (데모용)
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserInfo({ userType: "강사", name: "홍길동" });
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  // 탭 변경 함수
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tutor-search-header">
      {/* 상단 탭 메뉴 */}
      <div className="tabs">
        <button
          onClick={() => handleTabChange("수업일정관리")}
          className={`tab ${activeTab === "수업일정관리" ? "active" : ""}`}
        >
          수업일정관리
        </button>
        <button
          onClick={() => handleTabChange("학생관리")}
          className={`tab ${activeTab === "학생관리" ? "active" : ""}`}
        >
          학생관리
        </button>
        <button
          onClick={() => handleTabChange("프로필 관리")}
          className={`tab ${activeTab === "프로필 관리" ? "active" : ""}`}
        >
          프로필 관리
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

export default TutorSearchHeader;
