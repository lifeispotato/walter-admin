import React, { useEffect, useState } from "react";
import "../../css/notice/NoticeEdit.css";
import { useNavigate } from "react-router-dom";

const NoticeEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container notice-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="notice-edit-wrap">
            <span className="b1">수정하기</span>
            <div className="notice-edit-input">
              <div className="form-layout">
                <span className="form-title b4">제목</span>
                <input type="text" placeholder="제목을 입력하세요." />
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">본문</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
            </div>
            <div className="save-btn notice-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeEdit;
