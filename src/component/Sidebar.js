import React, { useEffect, useState } from "react";
import "../css/component/Sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(null);
  const [sidebar, setSidebar] = useState(1);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div className="admin-sidebar">
      <div className="sidebar-contents">
        <div className="sidebar-profile-container">
          <img src="/img/profile-empty.svg" />
          <span className="b1 sidebar-email">관리자 이메일</span>
        </div>
        <div className="sidebar-list-container">
          <div className="sidebar-list" onClick={() => setSidebar(1)}>
            <span
              className={`b1 sidebar-menu ${
                path && path.includes("home") ? "sidebar-active" : ""
              }`}
              onClick={() => navigate("/admin/home")}
            >
              홈
            </span>
          </div>
          <div
            className="sidebar-list"
            onClick={() => {
              if (sidebar === 2) {
                setSidebar(null);
              } else {
                setSidebar(2);
              }
            }}
          >
            <span
              className={`b1 sidebar-menu ${
                path && path.includes("member") ? "sidebar-active" : ""
              }`}
            >
              회원 관리
            </span>
            {sidebar === 2 || (path && path.includes("member")) ? (
              <img src="/img/sidebar-ac-ico.svg" />
            ) : (
              <img src="/img/sidebar-plus.svg" />
            )}
          </div>
          {sidebar === 2 || (path && path.includes("member")) ? (
            <div className="sidebar-submenu-container">
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("member/member")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/member/member")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("member/member") ? "text-ac" : ""
                    }`}
                  >
                    일반 회원 관리
                  </span>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("member/startup")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/member/startup")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("member/startup") ? "text-ac" : ""
                    }`}
                  >
                    스타트업 관리
                  </span>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("member/leave")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/member/leave")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("member/leave") ? "text-ac" : ""
                    }`}
                  >
                    탈퇴 회원 관리
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className="sidebar-list"
            onClick={() => {
              if (sidebar === 3) {
                setSidebar(null);
              } else {
                setSidebar(3);
              }
            }}
          >
            <span
              className={`b1 sidebar-menu ${
                path && path.includes("employment") ? "sidebar-active" : ""
              }`}
            >
              공고 및 지원서 관리
            </span>
            {sidebar === 3 || (path && path.includes("employment")) ? (
              <img src="/img/sidebar-ac-ico.svg" />
            ) : (
              <img src="/img/sidebar-plus.svg" />
            )}
          </div>
          {sidebar === 3 || (path && path.includes("employment")) ? (
            <div className="sidebar-submenu-container">
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("employment/recruit")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/employment/recruit")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("employment/recruit")
                        ? "text-ac"
                        : ""
                    }`}
                  >
                    등록된 채용 공고
                  </span>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("employment/resume")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/employment/resume")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("employment/resume")
                        ? "text-ac"
                        : ""
                    }`}
                  >
                    등록된 지원서
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className="sidebar-list"
            onClick={() => {
              if (sidebar === 4) {
                setSidebar(null);
              } else {
                setSidebar(4);
              }
            }}
          >
            <span
              className={`b1 sidebar-menu ${
                path && path.includes("content") ? "sidebar-active" : ""
              }`}
            >
              콘텐츠 관리
            </span>
            {sidebar === 4 || (path && path.includes("content")) ? (
              <img src="/img/sidebar-ac-ico.svg" />
            ) : (
              <img src="/img/sidebar-plus.svg" />
            )}
          </div>
          {sidebar === 4 || (path && path.includes("content")) ? (
            <div className="sidebar-submenu-container">
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("content/program")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/content/program")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("content/program") ? "text-ac" : ""
                    }`}
                  >
                    채용 프로그램
                  </span>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("content/contents")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/content/contents")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("content/contents") ? "text-ac" : ""
                    }`}
                  >
                    콘텐츠
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className="sidebar-list"
            onClick={() => {
              if (sidebar === 5) {
                setSidebar(null);
              } else {
                setSidebar(5);
              }
            }}
          >
            <span
              className={`b1 sidebar-menu ${
                path && path.includes("service") ? "sidebar-active" : ""
              }`}
            >
              서비스 관리
            </span>
            {sidebar === 5 || (path && path.includes("service")) ? (
              <img src="/img/sidebar-ac-ico.svg" />
            ) : (
              <img src="/img/sidebar-plus.svg" />
            )}
          </div>
          {sidebar === 5 || (path && path.includes("service")) ? (
            <div className="sidebar-submenu-container">
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("service/ask")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/service/ask")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("service/ask") ? "text-ac" : ""
                    }`}
                  >
                    문의 내역 관리
                  </span>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("service/notice")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/service/notice")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("service/notice") ? "text-ac" : ""
                    }`}
                  >
                    공지사항 관리
                  </span>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("service/terms")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/service/terms")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("service/terms") ? "text-ac" : ""
                    }`}
                  >
                    약관 관리
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className="sidebar-list"
            onClick={() => {
              if (sidebar === 6) {
                setSidebar(null);
              } else {
                setSidebar(6);
              }
            }}
          >
            <span
              className={`b1 sidebar-menu ${
                path && path.includes("setting") ? "sidebar-active" : ""
              }`}
            >
              환경설정
            </span>
            {sidebar === 6 || (path && path.includes("setting")) ? (
              <img src="/img/sidebar-ac-ico.svg" />
            ) : (
              <img src="/img/sidebar-plus.svg" />
            )}
          </div>
          {sidebar === 6 || (path && path.includes("setting")) ? (
            <div className="sidebar-submenu-container">
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("setting/basic")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/setting/basic")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("setting/basic") ? "text-ac" : ""
                    }`}
                  >
                    기본정보 관리
                  </span>
                </div>
              </div>
              <div className="sidebar-submenu">
                <div
                  className={`sidebar-submenu-info ${
                    path && path.includes("setting/manager")
                      ? "sidebar-submenu-info-ac"
                      : ""
                  }`}
                  onClick={() => navigate("admin/setting/manager")}
                >
                  <span
                    className={`b5 ${
                      path && path.includes("setting/manager") ? "text-ac" : ""
                    }`}
                  >
                    관리자 권한 관리
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
