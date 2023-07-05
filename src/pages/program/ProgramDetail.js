import React, { useEffect, useState } from "react";
import "../../css/program/ProgramDetail.css";
import { useNavigate } from "react-router-dom";

const ProgramDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container program-detail-container">
          <div className="detail-top-container">
            <div className="go-back-container" onClick={() => navigate(-1)}>
              <img src="/img/chevron-left.svg" />
              <span className="b3">뒤로가기</span>
            </div>
            <div className="detail-btn-container">
              <button className="detail-del-btn">삭제</button>
              {/* <button className="detail-edit-btn">수정하기</button> */}
            </div>
          </div>
          <div className="program-detail-wrap">
            <span className="b1">기본정보</span>
            <div className="form-layout">
              <span className="form-title b4">등록 관리자 이메일</span>
              <span className="form-content b5">123@123.com</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">프로그램명</span>
              <span className="form-content b5">
                프로그램명 프로그램명 프로그램명 프로그램명 프로그램명
                프로그램명
              </span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">등록일</span>
              <span className="form-content b5">YYYY-MM-DD</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">진행기간</span>
              <span className="form-content b5">YYYY-MM-DD ~ YYYY-MM-DD</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">상태</span>
              <span className="form-content b5">진행중</span>
            </div>
            <div className="form-layout flex-start">
              <span className="form-title b4">썸네일</span>
              <div className="program-detail-thumbnail">
                <img src="/img/thumbnail-empty.svg" />
              </div>
            </div>
            <div className="form-layout flex-start program-summary-form">
              <span className="form-title b4">요약설명</span>
              <span className="form-content b5">
                요약설명 요약설명 요약설명 요약설명 요약설명 요약설명 요약설명
                요약설명 요약설명 요약설명 요약설명 요약설명 요약설명 요약설명
                요약설명 요약설명 요약설명
              </span>
            </div>
            <div className="form-layout flex-start program-info-form">
              <span className="form-title b4">내용</span>
              <span className="form-content b5">
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
              </span>
            </div>
            <button
              className="detail-edit-btn"
              onClick={() => navigate("/admin/content/program/edit")}
            >
              <span className="c1">수정하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
