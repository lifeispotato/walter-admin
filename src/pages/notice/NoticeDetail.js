import React, { useEffect, useState } from "react";
import "../../css/notice/NoticeDetail.css";
import { useNavigate } from "react-router-dom";

const NoticeDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container notice-detail-container">
          <div className="detail-top-container">
            <div className="go-back-container" onClick={() => navigate(-1)}>
              <img src="/img/chevron-left.svg" />
              <span className="b3">뒤로가기</span>
            </div>
            <div className="detail-btn-container">
              <button className="detail-del-btn">삭제</button>
              <button
                className="detail-edit-btn"
                onClick={() => navigate("/admin/service/notice/edit")}
              >
                수정하기
              </button>
            </div>
          </div>
          <div className="notice-detail-wrap">
            <span className="b1">상세보기</span>
            <div className="form-layout">
              <span className="form-title b4">제목</span>
              <span className="form-content b5">제목제목제목</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">게시일자</span>
              <span className="form-content b5">YYYY-MM-DD</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">게시 관리자 이메일</span>
              <span className="form-content b5">이메일이메일이메일</span>
            </div>
            <div className="form-layout flex-start">
              <span className="form-title b4">본문</span>
              <span className="form-content b5">
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
