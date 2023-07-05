import React, { useEffect, useState } from "react";
import "../css/component/SendMail.css";
import { useNavigate } from "react-router-dom";
import CheckPopup from "./CheckPopup";

const SendMail = () => {
  const navigate = useNavigate();
  const [send, setSend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container send-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="send-edit-wrap">
            <span className="b1">수정하기</span>
            <div className="send-edit-input">
              <div className="form-layout">
                <span className="form-title b4">메일제목</span>
                <input type="text" placeholder="제목을 입력하세요." />
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">내용</span>
                <textarea type="text" placeholder="내용을 입력하세요." />
              </div>
            </div>
            <div className="save-btn send-edit-save">
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                전송
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <CheckPopup
          content={"필수입력 항목을 작성해 주세요."}
          setIsOpen={setIsOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SendMail;
