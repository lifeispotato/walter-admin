import React, { useEffect, useState } from "react";
import "../../css/resume/ResumeSearch.css";

const RecruitSearch = () => {
  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container resume-container search-container">
          <div className="go-back-container">
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <h2>검색결과</h2>
          <div className="resume-table-container">
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
            <div className="resume-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1"></th>
                    <th className="c1">이름</th>
                    <th className="c1">생성일</th>
                    <th className="c1">진행상태</th>
                    <th className="c1">지원 스타트업</th>
                    <th className="c1">지원서 삭제</th>
                    <th className="c1">승인/수정</th>
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
                      <div className="table-filter">
                        <span>면접진행</span>
                        <img src="/img/table-chevron.svg" />
                      </div>
                    </td>
                    <td>코드메이커</td>
                    <td className="table-btn-del">
                      <button className="c1">삭제</button>
                    </td>
                    <td className="table-btn-detail">
                      <button>
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

export default RecruitSearch;
