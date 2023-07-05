import React, { useEffect, useState } from "react";
import "../../css/program/ProgramEdit.css";
import { useNavigate } from "react-router-dom";

const ProgramEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container program-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="program-edit-wrap">
            <span className="b1">수정하기</span>
            <span className="b1">기본정보</span>
            <div className="program-edit-input">
              <div className="form-layout">
                <span className="form-title b4">등록관리자이메일</span>
                <input type="text" disabled placeholder="이메일" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">프로그램명*</span>
                <input type="text" placeholder="프로그램명" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">진행기간*</span>
                <div className="period-form">
                  <div className="period-form-input">
                    <input
                      className="date-input"
                      data-placeholder="YYYY-MM-DD"
                      type="date"
                      required
                    />
                  </div>
                  <span className="b5">~</span>
                  <div className="period-form-input">
                    <input
                      className="date-input"
                      data-placeholder="YYYY-MM-DD"
                      type="date"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-layout">
                <span className="form-title b4">상태*</span>
                <div className="dropdown-input-container">
                  <div className="dropdown-input">
                    <input type="text" placeholder="모임상태를 선택하세요" />
                    <img src="/img/table-chevron.svg" />
                  </div>
                  <div className="dropdown-submenu">
                    <span>모집중</span>
                    <span>종료</span>
                  </div>
                </div>
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
                  className="program-summary-textarea"
                />
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">본문</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
            </div>
            <div className="save-btn program-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramEdit;
