import React, { useEffect, useState } from "react";
import "../../css/ask/AskDetail.css";

const AskDetail = (props) => {
  const [askContent, setAskContent] = useState(null);
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    if (!askContent) {
      setAnswer(false);
      return;
    } else {
      setAnswer(true);
      return;
    }
  }, []);

  return (
    <div className="admin-popup-container">
      <div className="admin-content-container ask-detail-container">
        <div className="ask-popup" ref={props.Askref}>
          <h4>문의 상세</h4>
          <div className="ask-info">
            <div className="form-layout">
              <span className="form-title b4">문의자 이메일</span>
              <span className="form-content b5">ididididid@asd.com</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">작성일자</span>
              <span className="form-content b5">YYYY/MM/DD</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">상태</span>
              <span className="form-content ask-state-text b5">답변대기</span>
            </div>
            <div className="form-layout flex-start">
              <span className="form-title b4">문의 내용</span>
              <span className="form-content b5">
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </span>
            </div>
            {answer ? (
              <div className="form-layout flex-start answer-true">
                <span className="form-title b4">답변 내용</span>
                <div className="answer-true-container">
                  <span className="form-content b5">
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                  </span>
                  <button
                    className="answer-edit"
                    onClick={() => setAnswer(false)}
                  >
                    수정하기
                  </button>
                </div>
              </div>
            ) : (
              <div className="form-layout-textarea">
                <span className="form-title b4">답변</span>
                <textarea
                  className="ask-answer-textarea"
                  placeholder="내용을 입력하세요"
                  onChange={(e) => {
                    setAskContent(e.target.value);
                  }}
                />
                <div className="save-btn ask-answer-save">
                  <button
                    onClick={() => {
                      if (!askContent) {
                        //toast 넣기
                        return;
                      }
                      if (askContent) {
                        setAnswer(true);
                      }
                    }}
                  >
                    답변하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskDetail;
