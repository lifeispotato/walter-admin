import React, { useEffect, useState } from "react";
import "../../css/program/Program.css";
import { useNavigate } from "react-router-dom";

const Program = () => {
  const navigate = useNavigate();
  const [programFilter, setProgramFilter] = useState(1);
  const [activation, setActivation] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container program-container">
          <h2>채용 프로그램</h2>
          <div className="program-filter-container">
            <button
              className={`program-filter ${
                programFilter === 1 ? "btn-active" : ""
              }`}
              onClick={() => setProgramFilter(1)}
            >
              <span className="c1">전체</span>
            </button>
            <button
              className={`program-filter ${
                programFilter === 2 ? "btn-active" : ""
              }`}
              onClick={() => setProgramFilter(2)}
            >
              <span className="c1">진행중</span>
            </button>
            <button
              className={`program-filter ${
                programFilter === 3 ? "btn-active" : ""
              }`}
              onClick={() => setProgramFilter(3)}
            >
              <span className="c1">종료</span>
            </button>
          </div>
          <div className="program-table-container">
            <div className="num-search">
              <div className="table-total-num">
                <span className="c1">전체수</span>
                <span className="c1 ">000</span>
              </div>
              <div className="table-search">
                <button
                  className="table-plus-btn"
                  onClick={() => navigate("/admin/content/program/add")}
                >
                  <img src="/img/table-plus.svg" />
                  <span className="c1">프로그램 추가</span>
                </button>
              </div>
            </div>
            <div className="program-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1">상태</th>
                    <th className="c1">프로그램 제목</th>
                    <th className="c1">등록일</th>
                    <th className="c1">진행기간</th>
                    <th className="c1">등록 관리자 이메일</th>
                    <th className="c1">삭제</th>
                    <th className="c1">상세보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="table-filter">
                        <span className="c1">진행중</span>
                        <img
                          src="/img/table-chevron.svg"
                          onClick={() =>
                            setActivation((activation) => !activation)
                          }
                        />
                      </div>
                      {activation ? (
                        <div className="table-submenu-container">
                          <div className="table-submenu">
                            <span>진행중</span>
                          </div>
                          <div className="table-submenu">
                            <span>종료</span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      <span>
                        프로젝트 제목 프로젝트 제목 프로젝트 제목 프로젝트 제목
                      </span>
                    </td>
                    <td>YY-MM-DD</td>
                    <td>
                      YY-MM-DD
                      <br />~ YY-MM-DD
                    </td>
                    <td>이메일이메일이메일</td>
                    <td className="table-btn-del">
                      <button className="c1">삭제</button>
                    </td>
                    <td className="table-btn-detail">
                      <button
                        onClick={() =>
                          navigate("/admin/content/program/detail")
                        }
                      >
                        <img src="/img/plus-btn-ico.svg" />
                        <span className="c1">보기</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pagenation-container">
              <img src="/img/chevron-left.svg" />
              <div className="pagenation-number">
                <span className="b3">1</span>
                <span className="b3">2</span>
                <span className="b3">3</span>
                <span className="b3">4</span>
              </div>
              <img src="/img/chevron-right.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
