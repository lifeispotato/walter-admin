import { Routes, Route } from "react-router-dom";
import React from "react";
import SendMail from "./component/SendMail";
import Join from "./pages/join/Join";
import Ask from "./pages/ask/Ask";
import Contents from "./pages/contents/Contents";
import ContentsDetail from "./pages/contents/ContentsDetail";
import ContentsEdit from "./pages/contents/ContentsEdit";
import Leave from "./pages/leave/Leave";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Member from "./pages/member/Member";
import MemberDetail from "./pages/member/MemberDetail";
import MemberEdit from "./pages/member/MemberEdit";
import MemberSearch from "./pages/member/MemberSearch";
import Notice from "./pages/notice/Notice";
import NoticeAdd from "./pages/notice/NoticeAdd";
import NoticeDetail from "./pages/notice/NoticeDetail";
import NoticeEdit from "./pages/notice/NoticeEdit";
import Program from "./pages/program/Program";
import ProgramDetail from "./pages/program/ProgramDetail";
import ProgramEdit from "./pages/program/ProgramEdit";
import Recruit from "./pages/recruit/Recruit";
import RecruitDetail from "./pages/recruit/RecruitDetail";
import RecruitEdit from "./pages/recruit/RecruitEdit";
import RecruitResume from "./pages/recruit/RecruitResume";
import Resume from "./pages/resume/Resume";
import ResumeDetail from "./pages/resume/ResumeDetail";
import ResumeEdit from "./pages/resume/ResumeEdit";
import ResumeSearch from "./pages/resume/ResumeSearch";
import Information from "./pages/setting/Information";
import Manager from "./pages/setting/Manager";
import ManagerAdd from "./pages/setting/ManagerAdd";
import ManagerEdit from "./pages/setting/ManagerEdit";
import Startup from "./pages/startup/Startup";
import StartupDetail from "./pages/startup/StartupDetail";
import StartupEdit from "./pages/startup/StartupEdit";
import Terms from "./pages/terms/Terms";
import JoinComplete from "./pages/join/JoinComplete";
import ProgramAdd from "./pages/program/ProgramAdd";
import ContentsAdd from "./pages/contents/ContentsAdd";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/join" element={<Join />} />
      <Route path="/admin/home" element={<Main />} />
      <Route path="/admin/join/complete" element={<JoinComplete />} />
      <Route path="/admin/setting/manager" element={<Manager />} />
      <Route path="/admin/setting/manager/add" element={<ManagerAdd />} />
      <Route path="/admin/setting/manager/edit" element={<ManagerEdit />} />
      <Route path="/admin/setting/basic" element={<Information />} />
      <Route path="/admin/service/terms" element={<Terms />} />
      <Route path="/admin/service/notice" element={<Notice />} />
      <Route path="/admin/service/notice/detail" element={<NoticeDetail />} />
      <Route path="/admin/service/notice/edit" element={<NoticeEdit />} />
      <Route path="/admin/service/notice/edit" element={<NoticeEdit />} />
      <Route path="/admin/service/notice/add" element={<NoticeAdd />} />
      <Route path="/admin/service/ask" element={<Ask />} />
      <Route path="/admin/content/contents" element={<Contents />} />
      <Route
        path="/admin/content/contents/detail"
        element={<ContentsDetail />}
      />
      <Route path="/admin/content/contents/edit" element={<ContentsEdit />} />
      <Route path="/admin/content/contents/add" element={<ContentsAdd />} />
      <Route path="/admin/content/program" element={<Program />} />
      <Route path="/admin/content/program/detail" element={<ProgramDetail />} />
      <Route path="/admin/content/program/edit" element={<ProgramEdit />} />
      <Route path="/admin/content/program/add" element={<ProgramAdd />} />
      <Route path="/admin/employment/resume" element={<Resume />} />
      <Route
        path="/admin/employment/resume/detail"
        element={<ResumeDetail />}
      />
      <Route path="/admin/employment/resume/edit" element={<ResumeEdit />} />
      <Route
        path="/admin/employment/resume/search"
        element={<ResumeSearch />}
      />
      <Route path="/admin/employment/recruit" element={<Recruit />} />
      <Route
        path="/admin/employment/recruit/detail"
        element={<RecruitDetail />}
      />
      <Route
        path="/admin/employment/recruit/resume"
        element={<RecruitResume />}
      />
      <Route path="/admin/employment/recruit/edit" element={<RecruitEdit />} />
      <Route path="/admin/member/member" element={<Member />} />
      <Route path="/admin/member/member/detail" element={<MemberDetail />} />
      <Route path="/admin/member/member/edit" element={<MemberEdit />} />
      <Route path="/admin/member/member/search" element={<MemberSearch />} />
      <Route path="/admin/member/startup" element={<Startup />} />
      <Route path="/admin/member/startup/detail" element={<StartupDetail />} />
      <Route path="/admin/member/startup/edit" element={<StartupEdit />} />
      <Route path="/admin/member/email" element={<SendMail />} />
      <Route path="/admin/member/leave" element={<Leave />} />
    </Routes>
  );
};

export default AdminRouter;
