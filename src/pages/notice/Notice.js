import React, { useEffect, useState } from "react";
import "../../css/notice/Notice.css";
import { useNavigate } from "react-router-dom";

const Notice = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container notice-container">
          <h2>공지사항 관리</h2>
          <div className="notice-table-container">
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
                  onClick={() => navigate("/admin/service/notice/add")}
                >
                  <img src="/img/table-plus.svg" />
                  <span className="c1">추가하기</span>
                </button>
              </div>
            </div>
            <div className="notice-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1">No</th>
                    <th className="c1">제목</th>
                    <th className="c1">게시 관리자 이메일</th>
                    <th className="c1">게시일자</th>
                    <th className="c1">더보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>
                      <span>
                        제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                      </span>
                    </td>
                    <td>
                      <span>이메일</span>
                    </td>
                    <td>YYYY-MM-DD</td>
                    <td className="table-btn-detail">
                      <button
                        onClick={() => navigate("/admin/service/notice/detail")}
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

export default Notice;
