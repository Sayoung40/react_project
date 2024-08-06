import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/Join');
  }
  function handleClick2() {
    navigate('/');
  }
  return (
    <div className="login">
      <div className="nav">
        <div className="logo-button">
          <a className="logo" type="button">
            <img onClick={handleClick2} src={logo} />
          </a>
        </div>
        <ul className="join">
          <li>
            <a type="button" onClick={handleClick}>
              <span>회원가입</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="middle">
          <div className="login-under">
            <div className="login-top">
              <span className="title-name">로그인</span>
              <a className="lost-password" href="">
                비밀번호를 잃어버리셨나요?
              </a>
            </div>
            <form action="">
              <div className="input">
                <input className="input-email" type="text" placeholder="이메일 (example@gmail.com)" />
                <input className="input-password" type="text" placeholder="비밀번호" />
              </div>
            </form>
            <div className="login-button">
              <button>로그인</button>
            </div>
            <p className="another-way">다른 방법으로 로그인하기</p>
          </div>
          <div className="L-footer">
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
          src="https://an2-img.amz.wtchn.net/image/v2/79l7Q06fc1Pf8j2j_SIq5w.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRNeE9EUXlORFkzTnpNME9ESTJNaUo5LlNISnBfRmpzTzd1VmhGcVczUUhJaWVaeXlLeV9RVy1PNEFtSFdSc3hrbWc"
        />
      </div>
    </div>
  );
};

export default Login;
