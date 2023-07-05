import React, { useEffect, useState } from "react";
import "../../css/terms/Terms.css";

const Terms = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container terms-container">
          <h2>약관 관리</h2>
          <div
            className={`terms-wrap ${toggle === 1 ? "" : "terms-wrap-close"}`}
          >
            <img
              className={`terms-toggle-btn ${
                toggle === 1 ? "" : "toggle-btn-close"
              }`}
              src="/img/chevron-up.svg"
              onClick={() => {
                if (toggle === 1) {
                  setToggle(null);
                } else setToggle(1);
              }}
            />
            <span className="b1">(필수) 이용약관</span>
            {toggle === 1 ? (
              <div>
                <textarea className="terms-textarea" />
                <div className="save-btn terms-save">
                  <button>저장하기</button>
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={`terms-wrap ${toggle === 2 ? "" : "terms-wrap-close"}`}
          >
            <img
              className={`terms-toggle-btn ${
                toggle === 2 ? "" : "toggle-btn-close"
              }`}
              src="/img/chevron-up.svg"
              onClick={() => {
                if (toggle === 2) {
                  setToggle(null);
                } else setToggle(2);
              }}
            />
            <span className="b1">(필수) 개인정보처리방침</span>
            {toggle === 2 ? (
              <div>
                <textarea className="terms-textarea" />
                <div className="save-btn terms-save">
                  <button>저장하기</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
