import React, { useEffect, useState } from "react";
import "../../css/setting/Information.css";

const Information = () => {
  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container infomation-container">
          <h2>기본 정보 관리</h2>
          <div className="infomation-edit-wrap">
            <span className="b1">기업 정보</span>
            <div className="infomation-edit-input">
              <div className="form-layout">
                <span className="form-title b4">대표이사</span>
                <input type="text" placeholder="이름을 입력하세요." />
              </div>
              <div className="form-layout">
                <span className="form-title b4">주소</span>
                <input type="text" placeholder="주소을 입력하세요." />
              </div>
              <div className="form-layout">
                <span className="form-title b4">대표전화</span>
                <input type="tel" placeholder="010-1234-5678" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">이메일</span>
                <input type="email" placeholder="example@exam.com" />
              </div>
              <div className="form-layout">
                <span className="form-title b4">사업자등록번호</span>
                <input type="text" placeholder="000-00-00000" />
              </div>
            </div>
            <div className="save-btn information-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
