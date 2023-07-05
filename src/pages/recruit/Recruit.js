import React, { useEffect, useState } from "react";
import "../../css/recruit/Recruit.css";
import { useNavigate } from "react-router-dom";

const Recruit = () => {
  const navigate = useNavigate();
  const [activation, setActivation] = useState(false);
  const [recruitFilter, setRecruitFilter] = useState(1);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container recruit-container">
          <h2>등록된 채용 공고</h2>
          <div className="recruit-filter-container">
            <button
              className={`recruit-filter ${
                recruitFilter === 1 ? "btn-active" : ""
              }`}
              onClick={() => setRecruitFilter(1)}
            >
              <span className="c1">전체</span>
            </button>
            <button
              className={`recruit-filter ${
                recruitFilter === 2 ? "btn-active" : ""
              }`}
              onClick={() => setRecruitFilter(2)}
            >
              <span className="c1">진행중</span>
            </button>
            <button
              className={`recruit-filter ${
                recruitFilter === 3 ? "btn-active" : ""
              }`}
              onClick={() => setRecruitFilter(3)}
            >
              <span className="c1">종료</span>
            </button>
          </div>
          <div className="recruit-table-container">
            <div className="num-search">
              <div className="table-total-num">
                <span className="c1">전체 이용자 수</span>
                <span className="c1 ">000</span>
              </div>
              <div className="table-search">
                <div className="table-search-bar">
                  <input
                    className="search-bar-input"
                    type="text"
                    placeholder="검색어를 입력하세요"
                  />
                  <img src="/img/search-glass.svg" />
                </div>
              </div>
            </div>
            <div className="recruit-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1"></th>
                    <th className="c1">공고명</th>
                    <th className="c1">생성일</th>
                    <th className="c1">진행상태</th>
                    <th className="c1">지원 스타트업</th>
                    <th className="c1">지원서 삭제</th>
                    <th className="c1">상세보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <span>코드메이커 프론트엔드 개발자 채용</span>
                    </td>
                    <td>YYYY/MM/DD</td>
                    <td>
                      <div className="table-filter">
                        <span>진행중</span>
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
                    <td>코드메이커</td>
                    <td className="table-btn-del">
                      <button className="c1">삭제</button>
                    </td>
                    <td className="table-btn-detail">
                      <button
                        onClick={() =>
                          navigate("/admin/employment/recruit/detail")
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

export default Recruit;
