import React, { useEffect, useState } from "react";
import "../css/component/CheckPopup.css";

const CheckPopup = (props) => {
  return (
    <div className="admin-popup-container">
      <div className="admin-content-container check-popoup-container">
        <div className="check-popup">
          <span className="check-popup-content">{props.content}</span>
          <div className="popup-btn-container">
            <button
              className="check-popup-del"
              onClick={() => props.setIsOpen(false)}
            >
              취소
            </button>
            <button className="check-popup-btn">확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPopup;
