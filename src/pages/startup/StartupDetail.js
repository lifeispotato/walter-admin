import React, { useEffect, useState } from "react";
import "../../css/startup/StartupDetail.css";
import { useNavigate } from "react-router-dom";

const StartupDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container startup-detail-container">
          <div className="detail-top-container">
            <div className="go-back-container" onClick={() => navigate(-1)}>
              <img src="/img/chevron-left.svg" />
              <span className="b3">뒤로가기</span>
            </div>
            <div className="detail-btn-container">
              <button className="detail-del-btn">삭제</button>
              <button
                className="detail-edit-btn"
                onClick={() => navigate("/admin/member/startup/edit")}
              >
                수정하기
              </button>
            </div>
          </div>
          <div className="startup-detail-wrap">
            <span className="b1">기본정보</span>
            <div className="form-layout">
              <span className="form-title b4">아이디</span>
              <span className="form-content b5">아이디</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">기업명</span>
              <span className="form-content b5">코드메이커</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">이메일</span>
              <span className="form-content b5">이메일이메일이메일</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">투자단계</span>
              <span className="form-content b5">Seed</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">누적 투자 금액</span>
              <span className="form-content b5">5억</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">투자 정보</span>
              <span className="form-content b5">
                투자 정보 투자 정보 투자 정보 투자 정보 투자 정보 투자 정보 투자
                정보 투자 정보 투자 정보 투자 정보 투자 정보 투자 정보 투자 정보
                투자 정보 투자 정보 투자 정보 투자 정보 투자 정보 투자 정보 투자
                정보
              </span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">직원 수</span>
              <span className="form-content b5">10명</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">지역</span>
              <span className="form-content b5">서울</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">서비스 소개 링크</span>
              <span className="form-content b5">example.com</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">채용 페이지 링크</span>
              <span className="form-content b5">example.com</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">그 외 참고링크</span>
              <span className="form-content b5">example.com</span>
            </div>
            <div className="form-layout flex-start">
              <span className="form-title b4">사업자 등록증</span>
              <img src="/img/thumbnail-empty.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetail;
