import React, { useEffect, useState } from "react";
import "../../css/contents/ContentsEdit.css";
import { useNavigate } from "react-router-dom";

const ContentsEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container contents-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="contents-edit-wrap">
            <span className="b1">수정하기</span>
            <div className="contents-edit-input">
              <div className="form-layout">
                <span className="form-title b4">제목</span>
                <input type="text" placeholder="제목을 입력하세요." />
              </div>
              <div className="form-layout file-container flex-start">
                <span className="form-title b4">썸네일*</span>
                <div className="file-detail-container">
                  <div className="file-input-wrap">
                    <label htmlFor="file-input">
                      <img src="/img/file-upload-plus.svg" />
                      <span>파일 등록</span>
                    </label>
                    <input
                      id="file-input"
                      className="file-input"
                      type="file"
                      required
                    />
                  </div>
                  <div className="file-name-container">
                    <div className="file-name">
                      <span>asdfadf.svg</span>
                      <img src="/img/file-del-btn.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">요약설명*</span>
                <textarea
                  type="text"
                  placeholder="내용을 입력하세요."
                  className="contents-summary-textarea"
                />
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">본문</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
            </div>
            <div className="save-btn contents-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsEdit;
