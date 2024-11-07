import React from "react";
import TutorSearchHeader from "../Components/Tutor/TutorSearchHeader";
import { Route, Routes } from "react-router-dom";

function TutorRoute(props) {
  return (
    <>
      <TutorSearchHeader />
      <Routes>
        <Route path="/" element={"수업 일정 관리"} />
        <Route path="/" element={"학생 관리"} />
        <Route path="/" element={"프로필 관리"} />
      </Routes>
    </>
  );
}

export default TutorRoute;
