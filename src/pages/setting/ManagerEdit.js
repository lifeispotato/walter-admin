import React, { useEffect, useState } from "react";
import "../../css/setting/ManagerEdit.css";
import { useNavigate } from "react-router-dom";

const ManagerEdit = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-container">
      <div className="admin-wrap">
        <div className="admin-content-container manager-edit-container">
          <div className="go-back-container" onClick={() => navigate(-1)}>
            <img src="/img/chevron-left.svg" />
            <span className="b3">뒤로가기</span>
          </div>
          <div className="manager-edit-wrap">
            <span className="b1">수정하기</span>
            <div className="manager-edit-input">
              <div className="form-layout">
                <span className="form-title b4">이메일</span>
                <input type="text" placeholder="이메일을 입력하세요." />
              </div>
              <div className="form-layout">
                <span className="form-title b4">비밀번호</span>
                <input type="password" placeholder="비밀번호를 입력하세요." />
              </div>
              <div className="form-layout manager-input-pw">
                <span className="form-title b4">비밀번호 확인</span>
                <input
                  type="password"
                  placeholder="비밀번호를 한 번 더 입력하세요."
                />
              </div>
              <div className="form-layout form-layout-radio flex-start">
                <span className="form-title b4 ">권한</span>
                <div className="manager-input-radio">
                  <input
                    type="radio"
                    name="right"
                    id="rootadmin"
                    value="ROOTADMIN"
                    placeholder="비밀번호를 한 번 더 입력하세요."
                  />
                  <label className="b5" htmlFor="rootadmin">
                    ROOT
                  </label>
                  <input
                    type="radio"
                    name="right"
                    id="admin"
                    value="ADMIN"
                    placeholder="비밀번호를 한 번 더 입력하세요."
                  />
                  <label className="b5" htmlFor="admin">
                    ADMIN
                  </label>
                  <span className="foot-note">
                    *ROOT일 경우 아래 접근권한 설정에 관계없이 모든 메뉴 접근이
                    가능합니다.
                  </span>
                </div>
              </div>
              <div className="form-layout flex-start">
                <span className="form-title b4">접근 권한</span>
                <div className="manager-input-check">
                  <div className="member-manage-check">
                    <span className="b5 manage-check-title">회원관리</span>
                    <input
                      type="checkbox"
                      name="member"
                      id="member"
                      value="MEMBER"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="member">
                      일반회원 관리
                    </label>
                    <input
                      type="checkbox"
                      name="member"
                      id="startup"
                      value="STARTUP"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="startup">
                      스타트업 관리
                    </label>
                    <input
                      type="checkbox"
                      name="member"
                      id="leave"
                      value="LEAVE"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="leave">
                      탈퇴회원 관리
                    </label>
                  </div>
                  <div className="member-manage-check">
                    <span className="b5 manage-check-title">
                      공고 및 지원서 관리
                    </span>
                    <input
                      type="checkbox"
                      name="employment"
                      id="announcement"
                      value="ANNOUNCEMENT"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="announcement">
                      등록된 채용 공고
                    </label>
                    <input
                      type="checkbox"
                      name="employment"
                      id="doc"
                      value="DOC"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="doc">
                      등록된 지원서
                    </label>
                  </div>
                  <div className="member-manage-check">
                    <span className="b5 manage-check-title">콘텐츠 관리</span>
                    <input
                      type="checkbox"
                      name="content"
                      id="program"
                      value="PROGRAM"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="program">
                      채용 프로그램
                    </label>
                    <input
                      type="checkbox"
                      name="content"
                      id="contents"
                      value="CONTENTS"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="contents">
                      콘텐츠
                    </label>
                  </div>
                  <div className="member-manage-check">
                    <span className="b5 manage-check-title">서비스 관리</span>
                    <input
                      type="checkbox"
                      name="service"
                      id="ask"
                      value="ASK"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="ask">
                      문의내역 관리
                    </label>
                    <input
                      type="checkbox"
                      name="service"
                      id="notice"
                      value="NOTICE"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="notice">
                      공지사항 관리
                    </label>
                    <input
                      type="checkbox"
                      name="service"
                      id="terms"
                      value="TERMS"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="terms">
                      약관 관리
                    </label>
                  </div>
                  <div className="member-manage-check">
                    <span className="b5 manage-check-title">환결설정</span>
                    <input
                      type="checkbox"
                      name="setting"
                      id="base"
                      value="BASE"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="base">
                      기본정보 관리
                    </label>
                    <input
                      type="checkbox"
                      name="setting"
                      id="manager"
                      value="MANAGER"
                      placeholder="비밀번호를 한 번 더 입력하세요."
                    />
                    <label className="b5" htmlFor="manager">
                      관리자 권한 관리
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="save-btn manager-edit-save">
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerEdit;
