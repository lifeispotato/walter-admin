import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/join/Join.css";

const Join = () => {
  let navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-popup-container join-container">
          <div className="join-wrap">
            <span className="">회원가입</span>
            <div className="join-input-container">
              <div className="join-input">
                <span className="b5">이름</span>
                <input type="text" placeholder="이름을 입력해 주세요." />
              </div>
              <div className="join-input">
                <span className="b5">이메일</span>
                <input type="email" placeholder="이메일을 입력해 주세요." />
              </div>
              <div className="join-input">
                <span className="b5">비밀번호</span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
                <span className="pw-caption">
                  조합 : 영문 대문자/영문 소문자/숫자/특수문자 중 2가지 이상
                  <br />
                  글자수: 8자~16자
                </span>
              </div>
              <div className="join-input">
                <span className="b5">비밀번호</span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
              </div>
            </div>
            <div className="join-btn-container">
              <button className="join-btn">회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
