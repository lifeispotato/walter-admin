import React, { useEffect, useState } from "react";
import "../../css/leave/Leave.css";

const Leave = () => {
  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container leave-container">
          <h2>탈퇴 회원 관리</h2>
          <div className="leave-table-container">
            <div className="num-search">
              <div className="table-total-num">
                <span className="c1">전체 이용자 수</span>
                <span className="c1 ">000</span>
              </div>
            </div>
            <div className="leave-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1"></th>
                    <th className="c1">이메일</th>
                    <th className="c1">별명</th>
                    <th className="c1">탈퇴사유</th>
                    <th className="c1">탈퇴일</th>
                    <th className="c1">완전삭제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <span>이메일</span>
                    </td>
                    <td>
                      <span>별명</span>
                    </td>
                    <td>
                      <span>
                        탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴
                      </span>
                    </td>
                    <td>YYYY/MM/DD</td>
                    <td className="table-btn-del">
                      <button>
                        <span className="c1">완전삭제</span>
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

export default Leave;
