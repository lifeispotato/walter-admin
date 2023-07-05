import React, { useEffect, useState } from "react";
import "../../css/setting/Manager.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CheckPopup from "../../component/CheckPopup";

const Manager = () => {
  const navigate = useNavigate();

  const [activation, setActivation] = useState(false);
  const [authority, setAuthority] = useState(false);
  const [managerFilter, setManagerFilter] = useState(1);
  //팝업 제어
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container manager-container">
          <h2>관리자 권한 관리</h2>
          <div className="manager-filter-container">
            <button
              className={`manager-filter ${
                managerFilter === 1 ? "btn-active" : ""
              }`}
              onClick={() => setManagerFilter(1)}
            >
              <span className="c1">전체</span>
            </button>
            <button
              className={`manager-filter ${
                managerFilter === 2 ? "btn-active" : ""
              }`}
              onClick={() => setManagerFilter(2)}
            >
              <span className="c1">ROOT</span>
            </button>
            <button
              className={`manager-filter ${
                managerFilter === 3 ? "btn-active" : ""
              }`}
              onClick={() => setManagerFilter(3)}
            >
              <span className="c1">ADMIN</span>
            </button>
          </div>
          <div className="manager-table-container">
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
                <button
                  className="table-plus-btn"
                  onClick={() => navigate("/admin/setting/manager/add")}
                >
                  <img src="/img/table-plus.svg" />
                  <span className="c1">추가하기</span>
                </button>
              </div>
            </div>
            <div className="manager-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1">이메일</th>
                    <th className="c1">문의내용</th>
                    <th className="c1">가입일</th>
                    <th className="c1">활성화</th>
                    <th className="c1">권한</th>
                    <th className="c1">생성일</th>
                    <th className="c1">삭제</th>
                    <th className="c1">승인/수정</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>이메일</td>
                    <td>이름</td>
                    <td>YYYY/MM/DD</td>
                    <td>
                      <div className="table-filter">
                        <span>비활성화</span>
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
                            <span>활성화</span>
                          </div>
                          <div className="table-submenu">
                            <span>비활성화</span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      <div className="table-filter">
                        <span>ADMIN</span>
                        <img
                          src="/img/table-chevron.svg"
                          onClick={() =>
                            setAuthority((authority) => !authority)
                          }
                        />
                      </div>
                    </td>
                    <td>YYYY/MM/DD</td>
                    <td className="table-btn-del">
                      <button
                        className="c1"
                        onClick={() => {
                          toast("삭제가 완료되었습니다", {
                            icon: <img src="/img/toast-check.svg" />,
                          });
                        }}
                      >
                        삭제
                      </button>
                    </td>
                    <td className="table-btn">
                      <button
                        className="c1"
                        onClick={(e) => {
                          if (e.target.innerText === "수정") {
                            navigate("/admin/setting/manager/edit/");
                            return;
                          }
                          if (e.target.innerText === "승인하기") {
                            //승인시 행동 추가해야 함
                            return;
                          }
                        }}
                      >
                        수정
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
      {isOpen ? (
        <CheckPopup
          content={"필수입력 항목을 작성해 주세요."}
          setIsOpen={setIsOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Manager;
