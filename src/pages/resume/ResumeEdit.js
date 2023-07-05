import React, { useEffect, useState } from "react";
import "../../css/resume/ResumeEdit.css";
import { useNavigate } from "react-router-dom";

const ResumeEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container resume-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="resume-edit-wrap">
            <span className="b1">수정하기</span>
            <span className="b1">기본정보</span>
            <div className="resume-edit-input">
              <div className="form-layout">
                <span className="form-title b4">이름</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">지원날짜</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">연락처</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">이메일</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">지원 스타트업</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">진행상태</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">경력*</span>
                <input type="text" required placeholder="경력을 입력하세요" />
              </div>
              <span className="b1">학력</span>
              <div className="form-layout">
                <span className="form-title b4">학교명*</span>
                <input type="text" required placeholder="경력을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">학과명*</span>
                <input type="text" required placeholder="경력을 입력하세요" />
              </div>
              <div className="form-layout major-check-form">
                <span className="form-title b4"> </span>
                <div className="resume-major-check">
                  <span>컴퓨터 관련 전공 여부</span>
                  <span>(선택)</span>
                  <div>
                    <input type="checkbox" />
                    <span>예</span>
                  </div>
                </div>
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">상태*</span>
                <div className="resume-radio resume-radio-container">
                  <div className="resume-radio-container">
                    <input type="radio" name="education-state" id="enrolled" />
                    <label htmlFor="enrolled">재학</label>
                  </div>
                  <div className="resume-radio-container">
                    <input
                      type="radio"
                      name="education-state"
                      id="leave-of-absence"
                    />
                    <label htmlFor="leave-of-absence">휴학</label>
                  </div>
                  <div className="resume-radio-container">
                    <input type="radio" name="education-state" id="graduated" />
                    <label htmlFor="graduated">졸업</label>
                  </div>
                  <div className="resume-radio-container">
                    <input
                      type="radio"
                      name="education-state"
                      id="expected-graduation"
                    />
                    <label htmlFor="expected-graduation">졸업예정</label>
                  </div>
                  <div className="resume-radio-container">
                    <input type="radio" name="education-state" id="withdrawn" />
                    <label htmlFor="withdrawn">중퇴</label>
                  </div>
                </div>
              </div>
              <span className="b1">경력</span>
              <div className="form-layout">
                <span className="form-title b4">회사명*</span>
                <input type="text" required placeholder="경력을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">포지션*</span>
                <input type="text" required placeholder="경력을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">시작일*</span>
                <div className="period-form-input career-period">
                  <input
                    className="date-input"
                    data-placeholder="YYYY-MM-DD"
                    type="date"
                    required
                  />
                </div>
              </div>
              <div className="form-layout">
                <span className="form-title b4">종료일*</span>
                <div className="period-form-input career-period">
                  <input
                    className="date-input"
                    data-placeholder="YYYY-MM-DD"
                    type="date"
                    required
                  />
                </div>
              </div>
              <span className="b1">자격요건</span>
              <div className="form-layout">
                <span className="form-title b4">링크*</span>
                <div className="qualification-link">
                  <input
                    type="text"
                    required
                    placeholder="링크를 이곳에 입력해 주세요."
                  />
                  <button>추가</button>
                </div>
              </div>
              <div className="form-layout qualification-link-container">
                <span className="form-title b4"></span>
                <div className="qualification-link-file">
                  <div>
                    <span>exmaple.com</span>
                    <img src="/img/del_x.svg" />
                  </div>
                  <div>
                    <span>exmaple.com</span>
                    <img src="/img/del_x.svg" />
                  </div>
                </div>
              </div>
              <div className="form-layout">
                <span className="form-title b4">파일*</span>
                <input
                  className="intro-upload-input"
                  type="file"
                  id="qualification-file"
                />
                <label
                  className="intro-upload-label"
                  htmlFor="qualification-file"
                >
                  <img src="/img/file-upload.svg" />
                  <span className="body-rgular-16-25">파일 업로드</span>
                </label>
              </div>
              <div className="form-layout qualification-link-container">
                <span className="form-title b4"></span>
                <div className="qualification-link-file">
                  <div>
                    <span>exmaple.com</span>
                    <img src="/img/del_x.svg" />
                  </div>
                  <div>
                    <span>exmaple.com</span>
                    <img src="/img/del_x.svg" />
                  </div>
                </div>
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">자기소개*</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
            </div>
            <div className="save-btn resume-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEdit;
