import React, { useEffect, useState } from "react";
import "../../css/member/Member.css";
import { useNavigate } from "react-router-dom";

const Startup = () => {
  const navigate = useNavigate();
  const [activation, setActivation] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container member-container">
          <h2>스타트업 관리</h2>
          <div className="member-table-container">
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
            <div className="member-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1"></th>
                    <th className="c1">아이디</th>
                    <th className="c1">가입일</th>
                    <th className="c1">메일 보내기</th>
                    <th className="c1">계정 상태</th>
                    <th className="c1">계정 삭제</th>
                    <th className="c1">상세보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>홍길동</td>
                    <td>YYYY/MM/DD</td>
                    <td>
                      <div>
                        <span className="c1">메일 보내기</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-filter">
                        <span className="c1">비활성</span>
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
                            <span>활성</span>
                          </div>
                          <div className="table-submenu">
                            <span>비활성</span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="table-btn-del">
                      <button className="c1">삭제</button>
                    </td>
                    <td className="table-btn-detail">
                      <button
                        onClick={() => navigate("/admin/member/startup/detail")}
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

export default Startup;
