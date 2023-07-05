import React, { useEffect, useState } from "react";
import "../../css/startup/StartupEdit.css";
import { useNavigate } from "react-router-dom";

const StartupEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container startup-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="startup-edit-wrap">
            <span className="b1">수정하기</span>
            <div className="startup-edit-input">
              <div className="form-layout">
                <span className="form-title b4">아이디</span>
                <input type="text" disabled placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">기업명</span>
                <input type="text" required placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">이메일</span>
                <input type="text" required placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">투자 단계</span>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">누적 투자 금액</span>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">투자 정보</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
              <div className="form-layout">
                <span className="form-title b4">직원 수</span>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">지역</span>
                <input type="text" required placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">서비스 소개 링크</span>
                <input type="text" required placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">채용 페이지 링크</span>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">그 외 참고링크</span>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">사업자등록증</span>
                <div className="file-detail-container">
                  <div className="file-input-wrap">
                    <label htmlFor="img-input">
                      <img src="\img\img-upload.svg" />
                      <span>이미지 등록</span>
                    </label>
                    <input id="img-input" className="file-input" type="file" />
                  </div>
                  <div className="file-name">
                    <span>파일명.확장자명</span>
                    <img src="/img/file-del-btn.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="save-btn startup-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupEdit;
