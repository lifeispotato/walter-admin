import React, { useEffect, useState } from "react";
import "../../css/recruit/RecruitEdit.css";
import { useNavigate } from "react-router-dom";

const RecruitEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container recruit-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="recruit-edit-wrap">
            <span className="b1">수정하기</span>
            <span className="b1">기본정보</span>
            <div className="recruit-edit-input">
              <div className="form-layout">
                <span className="form-title b4">공고명*</span>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">등록 스타트업</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">생성일</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">이메일</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">진행상태</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <span className="b1">기술스택</span>
              <div className="form-layout">
                <span className="form-title b4">경력*</span>
                <div className="dropdown-input-container">
                  <div className="dropdown-input">
                    <input type="text" placeholder="모임상태를 선택하세요" />
                    <img src="/img/table-chevron.svg" />
                  </div>
                  {/* <div className="dropdown-submenu">
                    <span>모집중</span>
                    <span>종료</span>
                  </div> */}
                </div>
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">포지션*</span>
                <div className="position-input-container">
                  <div className="position-input">
                    <span>프론트엔드</span>
                  </div>
                  <div className="position-input">
                    <span>백엔드</span>
                  </div>
                  <div className="position-input">
                    <span>IOS</span>
                  </div>
                  <div className="position-input">
                    <span>Android</span>
                  </div>
                  <div className="position-input">
                    <span>DevOps</span>
                  </div>
                  <div className="position-input">
                    <span>크로스플랫폼 앱</span>
                  </div>
                  <div className="position-input">
                    <span>인공지능 · 머신러닝</span>
                  </div>
                  <div className="position-input">
                    <span>데이터 엔지니어</span>
                  </div>
                  <div className="position-input">
                    <span>게임 클라이언트</span>
                  </div>
                  <div className="position-input">
                    <span>게임 서버</span>
                  </div>
                  <div className="position-input">
                    <span>풀스택</span>
                  </div>
                  <div className="position-input">
                    <span>VR앱 개발자</span>
                  </div>
                  <div className="position-input">
                    <span>네이티브 앱 개발자</span>
                  </div>
                  <div className="position-input">
                    <span>PM/PO</span>
                  </div>
                  <div className="position-input">
                    <span>마케터</span>
                  </div>
                  <div className="position-input">
                    <span>디자이너</span>
                  </div>
                </div>
              </div>
              <div className="form-layout">
                <span className="form-title b4">관심 기술 스택*</span>
                <div className="dropdown-input-container">
                  <div className="dropdown-input">
                    <input type="text" placeholder="기술  스택을 선택하세요." />
                    <img src="/img/table-chevron.svg" />
                  </div>
                  {/* <div className="dropdown-submenu">
                    <span>모집중</span>
                    <span>종료</span>
                  </div> */}
                </div>
              </div>
              <span className="b1">주요업무</span>
              <div className="form-layout flex-start">
                <span className="form-title b4">주요업무*</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
              <span className="b1">자격요건</span>
              <div className="form-layout flex-start">
                <span className="form-title b4">자격요건*</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
              <span className="b1">우대사항</span>
              <div className="form-layout flex-start">
                <span className="form-title b4">우대사항*</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
            </div>
            <div className="save-btn recruit-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitEdit;
