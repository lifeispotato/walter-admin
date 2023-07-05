import React, { useEffect, useRef, useState } from "react";
import "../../css/ask/Ask.css";
import AskDetail from "./AskDetail";

const Ask = () => {
  const [popup, setPopup] = useState(false);
  const Askref = useRef();

  useEffect(() => {
    function handleOutside(e) {
      if (Askref.current && !Askref.current.contains(e.target)) {
        setPopup(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [Askref]);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container ask-container">
          <h2>문의 내역 관리</h2>
          <div className="ask-table-container">
            <div className="num-search">
              <div className="table-total-num">
                <span className="c1">문의 수</span>
                <span className="c1 ">000</span>
              </div>
              {/* <div className="table-search">
                <div className="table-search-bar">
                  <input
                    className="search-bar-input"
                    type="text"
                    placeholder="검색어를 입력하세요"
                  />
                  <img src="/img/search-glass.svg" />
                </div>
                <button className="table-plus-btn">
                  <img src="/img/table-plus.svg" />
                  <span className="c1">추가하기</span>
                </button>
              </div> */}
            </div>
            <div className="ask-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1">문의자 이메일</th>
                    <th className="c1">문의내용</th>
                    <th className="c1">작성일자</th>
                    <th className="c1">상태</th>
                    <th className="c1">상세보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ididididid@asd.com</td>
                    <td>
                      <span>문의내용문의내용문의내용ㅍ문의내용문의내용</span>
                    </td>
                    <td>YYYY/MM/DD</td>
                    <td>
                      <span className="ask-state-wait">답변대기</span>
                    </td>
                    <td className="table-btn-detail">
                      <button onClick={() => setPopup(true)}>
                        <img src="/img/plus-btn-ico.svg" />
                        <span className="c1">보기</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pagenation-container">
              <img src="/img/chevron-left.svg" />
              <div className="pagenation-number">
                <span className="b3">1</span>
                <span className="b3">2</span>
                <span className="b3">3</span>
                <span className="b3">4</span>
              </div>
              <img src="/img/chevron-right.svg" />
            </div>
          </div>
        </div>
      </div>
      {popup ? (
        <AskDetail
          setPopup={setPopup}
          Askref={Askref}
          onClick={(e) => {
            if (Askref.current && !Askref.current.contains(e.target)) {
              setPopup(false);
            }
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Ask;
