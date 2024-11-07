import { useState } from "react";

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
    // 페이지 이동 또는 내용 전환 로직 추가 가능
  };

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      {/* 상단 탭 메뉴 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={() => handleTabChange("수업일정관리")}
          style={tabStyle(activeTab === "수업일정관리")}
        >
          수업일정관리
        </button>
        <button
          onClick={() => handleTabChange("학생관리")}
          style={tabStyle(activeTab === "학생관리")}
        >
          학생관리
        </button>
        <button
          onClick={() => handleTabChange("프로필 관리")}
          style={tabStyle(activeTab === "프로필 관리")}
        >
          프로필 관리
        </button>
      </div>

      {/* 로그인 상태 표시 */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {isLoggedIn ? (
          <div>
            <span>
              {userInfo.name} {userInfo.userType}님, 안녕하세요.
            </span>
            <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
              로그아웃
            </button>
          </div>
        ) : (
          <button onClick={handleLogin}>로그인</button>
        )}
      </div>
    </div>
  );
}

// 스타일 함수: 선택된 탭의 배경색을 다르게 표시
const tabStyle = (isActive) => ({
  padding: "10px",
  fontWeight: isActive ? "bold" : "normal",
  backgroundColor: isActive ? "#f0f0f0" : "transparent",
  border: "none",
  cursor: "pointer",
});

export default TutorSearchHeader;
