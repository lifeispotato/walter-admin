import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/login/Login.css";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-popup-container login-container">
          <div className="login-wrap">
            <span className="">로그인</span>
            <div className="login-input-container">
              <div className="login-input">
                <span className="b5">이메일</span>
                <input type="email" placeholder="이메일을 입력해 주세요." />
              </div>
              <div className="login-input">
                <span className="b5">비밀번호</span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
              </div>
            </div>
            <div className="login-btn-container">
              <button className="login-btn">로그인</button>
              <button
                className="join-btn"
                onClick={() => navigate("/admin/join")}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
