import React from 'react';
import './Join.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Join = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/Login');
  }
  function handleClick2() {
    navigate('/');
  }
  return (
    <div className="join">
      <div className="nav">
        <div className="logo-button">
          <a type="button" className="logo" onClick={handleClick2}>
            <img src={logo} />
          </a>
        </div>
        <ul className="join">
          <li>
            <a type="button" onClick={handleClick}>
              <span>로그인</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="middle">
          <div className="join-watcha">
            <h1 className="join-title">회원가입</h1>
            <form action="">
              <div className="input">
                <label className="user">
                  <input className="name" type="text" placeholder="이름 (2자 이상)" />
                </label>
                <label className="user">
                  <input className="email" type="text" placeholder="이메일 (example@gmail.com)" />
                </label>
                <label className="user">
                  <input className="password" type="text" placeholder="비밀번호 (영문, 숫자, 특문 중 2개 조합 10자 이상)" />
                </label>
              </div>
              <div className="join-check">
                <div>
                  <label for="">
                    <div className="check-box"></div>
                    <span>전체 약관에 동의합니다</span>
                  </label>
                </div>
                <div>
                  <label for="">
                    <div className="check-box"></div>
                    <span>만 14세 이상입니다</span>
                  </label>
                </div>
                <div>
                  <label for="">
                    <div className="check-box"></div>
                    <span>(필수) 왓챠 서비스 이용 약관 보기 </span>
                  </label>
                </div>
                <div>
                  <label for="">
                    <div className="check-box"></div>
                    <span>(필수) 왓챠피디아 서비스 이용 약관 보기 </span>
                  </label>
                </div>
                <div>
                  <label for="">
                    <div className="check-box"></div>
                    <span>(필수) 개인정보 수집 및 이용 동의 보기</span>
                  </label>
                </div>
                <div>
                  <label for="">
                    <div className="check-box"></div>
                    <span>(선택) 신작 알림 이벤트 정보 수신 보기</span>
                  </label>
                </div>
              </div>
              <div className="join-watcha-button">
                <button type="submit">
                  <span role="textbox">가입하기</span>
                </button>
              </div>
            </form>
            <p className="payment">결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요</p>
          </div>
          <div className="J-footer">
            <ul>
              <li>
                <a href="">고객센터(이용 및 결제 문의) cs@watcha.co.kr • 02-515-9985 (유료) / 제휴 및 대외 협력 https://watcha.team/contact </a>
              </li>
            </ul>
            <br />
            <ul>
              <li>
                <a href="">
                  주식회사 왓챠 / 대표 박태훈 / 서울특별시 서초구 강남대로 343 신덕빌딩 3층 / 사업자등록번호 211-88-66013 / 통신판매업 신고번호 제 2019-서울서초-0965호 / 호스팅
                  서비스 제공자 아마존웹서비시즈코리아 유한회사 / 대표번호 02-515-9985 / 이용약관 / 개인정보 처리 방침 / 청소년 보호정책
                </a>
              </li>
            </ul>
          </div>
        </div>

        <img
          className="background"
          src="https://an2-img.amz.wtchn.net/image/v2/OTXyi4UqJ8SVjdAGATKDgQ.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRNeE9EUXhPVEV4TkRNM05UUXpNeUo5LlgzU1dpUWtWd2tJMTktRm5yVmk0VzN3MEM3dWVOVl9hZGN0cjlVSjNJWVE"
        />
      </div>
    </div>
  );
};

export default Join;
