import React from "react";
import ParentsSearchHeader from "../Components/Parents/ParentsSearchHeader";
import FindTutorPage from "../Pages/ParentsPage/FindTutorPage";
import ApplicationStatusPage from "../Pages/ParentsPage/ApplicationStatusPage";
import LessonManagePage from "../Pages/ParentsPage/LessonManagePage";
import { Route, Routes } from "react-router-dom";

function ParentsRoute(props) {
  return (
    <>
      <ParentsSearchHeader />
      <Routes>
        <Route path="/findTutor" elemnet={<FindTutorPage />} />
        <Route path="/appStatus" elemnet={<ApplicationStatusPage />} />
        <Route path="/LessonManage" elemnet={<LessonManagePage />} />
      </Routes>
    </>
  );
}

export default ParentsRoute;
