import React, { useEffect, useState } from "react";
import "../../css/member/MemberEdit.css";
import { useNavigate } from "react-router-dom";

const MemberEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container member-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="member-edit-wrap">
            <span className="b1">수정하기</span>
            <div className="member-edit-input">
              <div className="form-layout">
                <span className="form-title b4">아이디</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">이름*</span>
                <input type="text" required placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">이메일*</span>
                <input type="text" required placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">연락처</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
            </div>
            <div className="save-btn member-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberEdit;
