import React, { useEffect, useState } from "react";
import "../../css/member/MemberDetail.css";
import { useNavigate } from "react-router-dom";

const MemberDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container member-detail-container">
          <div className="detail-top-container">
            <div className="go-back-container" onClick={() => navigate(-1)}>
              <img src="/img/chevron-left.svg" />
              <span className="b3">뒤로가기</span>
            </div>
            <div className="detail-btn-container">
              <button className="detail-del-btn">삭제</button>
              <button
                className="detail-edit-btn"
                onClick={() => navigate("/admin/member/member/edit")}
              >
                수정하기
              </button>
            </div>
          </div>
          <div className="member-detail-wrap">
            <span className="b1">기본정보</span>
            <div className="form-layout">
              <span className="form-title b4">아이디</span>
              <span className="form-content b5">아이디</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">이름</span>
              <span className="form-content b5">이름</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">생년월일</span>
              <span className="form-content b5">YYYYMMDD - 1</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">이메일</span>
              <span className="form-content b5">이메일이메일이메일</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">휴대폰 번호</span>
              <span className="form-content b5">010-1234-1234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
