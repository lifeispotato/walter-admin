import React, { useEffect, useState } from "react";
import "../../css/resume/ResumeDetail.css";
import { useNavigate } from "react-router-dom";

const ResumeDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container resume-detail-container">
          <div className="detail-top-container">
            <div className="go-back-container" onClick={() => navigate(-1)}>
              <img src="/img/chevron-left.svg" />
              <span className="b3">뒤로가기</span>
            </div>
            <div className="detail-btn-container">
              <button className="detail-del-btn">삭제</button>
              <button
                className="detail-edit-btn"
                onClick={() => navigate("/admin/employment/resume/edit")}
              >
                수정하기
              </button>
            </div>
          </div>
          <div className="resume-detail-wrap">
            <span className="b1">기본사항</span>
            <div className="form-layout">
              <span className="form-title b4">이름</span>
              <span className="form-content b5">홍길동</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">지원 날짜</span>
              <span className="form-content b5">YYYY-MM-DD</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">연락처</span>
              <span className="form-content b5">010-1234-1234</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">이메일</span>
              <span className="form-content b5">이메일이메일이메일</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">지원 스타트업</span>
              <span className="form-content b5">코드메이커</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">진행 상태</span>
              <span className="form-content b5">지원중</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">경력</span>
              <span className="form-content b5">1년</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">포지션</span>
              <span className="form-content b5">프론트엔드</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">관심 기술 스택</span>
              <span className="form-content b5">Java, Java Script, Html5</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">학력</span>
              <span className="form-content b5">1년</span>
            </div>
            <span className="b1">학력</span>
            <div className="form-layout">
              <span className="form-title b4">학교명</span>
              <span className="form-content b5">00대학교</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">학과명</span>
              <span className="form-content b5">
                소프트웨어과 컴퓨터 관련 전공
              </span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">상태</span>
              <span className="form-content b5">졸업</span>
            </div>
            <span className="b1">경력</span>
            <div className="form-layout">
              <span className="form-title b4">회사명</span>
              <span className="form-content b5">길동브라더스</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">포지션</span>
              <span className="form-content b5">프론트엔드</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">시작일</span>
              <span className="form-content b5">2020-05-01</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">종료일</span>
              <span className="form-content b5">2020-05-01</span>
            </div>
            <span className="b1">자기소개</span>
            <div className="form-layout">
              <span className="form-title b4">링크</span>
              <span className="form-content b5">exmaple.com</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">파일</span>
              <div className="cover-letter-file">
                <div className="file-name-container">
                  <div className="file-name">adsf.svg</div>
                </div>
              </div>
            </div>
            <div className="form-layout flex-start">
              <span className="form-title b4">자기소개</span>
              <span className="form-content b5">
                날카로우나 얼마나 밝은 사랑의 천고에 이상은 교향악이다. 수
                이것은 인간의 얼마나 되는 품고 피다. 피가 든 할지라도 뿐이다.
                천고에 속에 눈이 위하여서. 있으며, 황금시대를 피가 말이다.
                기관과 이는 밥을 것이다. 방지하는 실현에 싶이 눈에 구할 같이
                얼음과 보라. 풍부하게 같지 없으면 우리의 인류의 맺어,
                방황하여도, 이것이다. 일월과 하여도 불어 청춘은 있는 끓는 같이
                이 뜨고, 끓는다. 내려온 그들은 거선의 피부가 몸이 이상은 청춘은
                품었기 보배를 힘있다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetail;
