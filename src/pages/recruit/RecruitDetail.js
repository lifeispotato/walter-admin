import React, { useEffect, useState } from "react";
import "../../css/recruit/RecruitDetail.css";
import { useNavigate } from "react-router-dom";

const RecruitDetail = () => {
  const navigate = useNavigate();
  const [activation, setActivation] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container recruit-detail-container">
          <div className="detail-top-container">
            <div className="go-back-container" onClick={() => navigate(-1)}>
              <img src="/img/chevron-left.svg" />
              <span className="b3">뒤로가기</span>
            </div>
            <div className="detail-btn-container">
              <button className="detail-del-btn">삭제</button>
              <button
                className="detail-edit-btn"
                onClick={() => navigate("/admin/employment/recruit/edit")}
              >
                수정하기
              </button>
            </div>
          </div>
          <div className="recruit-detail-wrap">
            <span className="b1">기본사항</span>
            <div className="form-layout">
              <span className="form-title b4">공고명</span>
              <span className="form-content b5">
                코드메이커 프론트엔드 개발자 채용
              </span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">등록 스타트업</span>
              <span className="form-content b5">코드메이커</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">생성일</span>
              <span className="form-content b5">YYYY-MM-DD</span>
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
              <span className="form-content b5">최종합격</span>
            </div>
            <span className="b1">기술 스택</span>
            <div className="form-layout">
              <span className="form-title b4">포지션</span>
              <span className="form-content b5">프론트엔드</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">경력</span>
              <span className="form-content b5">1년</span>
            </div>
            <div className="form-layout">
              <span className="form-title b4">관심 기술 스택</span>
              <span className="form-content b5">Java, Java Script, Html5</span>
            </div>
            <span className="b1">주요업무</span>
            <div className="form-layout flex-start recruit-form-list">
              <span className="form-title b4">주요업무</span>
              <ul>
                <li>
                  <span>·</span>
                  <p>주로 Javascript를 사용합니다.</p>
                </li>
                <li>
                  <span>·</span>
                  <p>
                    동료들(다른 프로그래머, 디자이너를 비롯한 모든 직군)과
                    협업하여, 고객 혹은 조직의 문제를
                    <br />
                    정의하고 적합한 해결책을 찾아내어 실행합니다.
                  </p>
                </li>
              </ul>
            </div>
            <span className="b1">자격요건</span>
            <div className="form-layout flex-start recruit-form-list">
              <span className="form-title b4">자격요건</span>
              <ul>
                <li>
                  <span>·</span>
                  <p>1년 이상의 경력이 있는 자</p>
                </li>
                <li>
                  <span>·</span>
                  <p>모바일 어플리케이션 구현 경험이 있는 자</p>
                </li>
              </ul>
            </div>
            <span className="b1">주요업무</span>
            <div className="form-layout flex-start recruit-form-list">
              <span className="form-title b4">주요업무</span>
              <ul>
                <li>
                  <span>·</span>
                  <p>프로그래머, 디자이너와의 협업 경험이 있는 경우</p>
                </li>
                <li>
                  <span>·</span>
                  <p>채팅 서비스를 구현한 경험이 있는 경우</p>
                </li>
                <li>
                  <span>·</span>
                  <p>문제에 맞는 해결 도출 능력이 빠른 자</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="recruit-recruit-wrap">
            <div className="table-total-num">
              <span className="b1">지원서 현황</span>
              <span className="c1">00개</span>
            </div>
            <div className="recruit-detail-table">
              <table>
                <thead>
                  <tr>
                    <th className="c1">이름</th>
                    <th className="c1">지원날짜</th>
                    <th className="c1">진행상태</th>
                    <th className="c1">상세보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>홍길동</td>
                    <td>YYYY/MM/DD</td>
                    <td>
                      <div className="table-filter">
                        <span>지원중</span>
                        <img
                          src="/img/table-chevron.svg"
                          onClick={() =>
                            setActivation((activation) => !activation)
                          }
                        />
                      </div>
                      {activation ? (
                        <div className="table-submenu-container">
                          <div className="table-submenu">
                            <span>지원중</span>
                          </div>
                          <div className="table-submenu">
                            <span>면접진행</span>
                          </div>
                          <div className="table-submenu">
                            <span>최종합격</span>
                          </div>
                          <div className="table-submenu">
                            <span>불합격</span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="table-btn-detail">
                      <button
                        onClick={() =>
                          navigate("/admin/employment/recruit/resume")
                        }
                      >
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
    </div>
  );
};

export default RecruitDetail;
