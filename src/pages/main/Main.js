import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/main/Main.css";

const Main = () => {
  let navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container main-container">
          <span className="b1">Welcome!</span>
          <div className="main-greetings">
            <h1>안녕하세요. 관리자님 :)</h1>
            <div className="main-user-count-container">
              <div className="all-user-count-container">
                <span>전체 이용자 수</span>
                <span>000명</span>
              </div>
              <div className="main-registration-secession">
                <span>회원(가입/탈퇴)</span>
                <span>000/000</span>
              </div>
            </div>
          </div>
          <div className="main-visitant-graph-container">
            <span className="b7">방문자 통계</span>
            <div className="main-graph-container">
              <div className="graph-chevron-left">
                <img className="cursorPointer" src="\img\chevron-left.svg" />
              </div>
              <div className="main-visitant-graph">
                <div className="graph-axis-wrap">
                  <div>
                    <span>15</span>
                    <div className="graph-axis-line"></div>
                  </div>
                  <div>
                    <span>10</span>
                    <div className="graph-axis-line"></div>
                  </div>
                  <div>
                    <span>5</span>
                    <div className="graph-axis-line"></div>
                  </div>
                  <div>
                    <span>0</span>
                    <div className="graph-axis-line"></div>
                  </div>
                </div>
                <div className="graph-bar-wrap">
                  {/* <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div> */}
                </div>
              </div>
              <div className="graph-chevron-right">
                <img className="cursorPointer" src="\img\chevron-right.svg" />
              </div>
            </div>
          </div>
          <div className="main-quick-menu">
            <span>퀵메뉴</span>
            <div className="main-quick-menu-list">
              <div
                className="main-quick-menu-container"
                onClick={() => navigate("/admin/member/member")}
              >
                <span>회원 관리</span>
                <div>
                  <span>일반 회원 관리</span>
                  <img src="\img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div
                className="main-quick-menu-container"
                onClick={() => navigate("/admin/member/startup")}
              >
                <span>회원 관리</span>
                <div>
                  <span>스타트업 관리</span>
                  <img src="\img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div
                className="main-quick-menu-container"
                onClick={() => {
                  navigate("/admin/employment/recruit");
                }}
              >
                <span>공고 및 지원서 관리</span>
                <div>
                  <span>등록된 채용 공고</span>
                  <img src="\img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div
                className="main-quick-menu-container"
                onClick={() => {
                  navigate("/admin/employment/resume");
                }}
              >
                <span>공고 및 지원서 관리</span>
                <div>
                  <span>등록된 지원서</span>
                  <img src="\img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div
                className="main-quick-menu-container"
                onClick={() => navigate("/admin/content/program")}
              >
                <span>서비스 관리</span>
                <div>
                  <span>채용 프로그램</span>
                  <img src="\img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div
                className="main-quick-menu-container"
                onClick={() => navigate("/admin/service/terms")}
              >
                <span>서비스 관리</span>
                <div>
                  <span>약관 관리</span>
                  <img src="\img\quick-menu-arrow.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
