import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/Login');
  }
  function handleClick2() {
    navigate('/Join');
  }
  function handleClick3() {
    navigate('/');
  }
  return (
    <div className="navbar">
      <div className="navbar-side">
        <div className="logo">
          <a className="logo-a" type="button" onClick={handleClick3}>
            <img src={logo} alt="" />
          </a>
        </div>
        <ul>
          <li>
            <i></i>
            <a href="">구독</a>
          </li>
          <li>
            <i></i>
            <a href="">개별 구매</a>
          </li>
          <li>
            <i></i>
            <a href="">웹툰</a>
          </li>
          <div className="line"></div>
          <li>
            <i></i>
            <a href="">파티</a>
          </li>
          <li>
            <i></i>
            <a href="">찾기</a>
          </li>
          <li>
            <i></i>
            <a href="">평가</a>
          </li>
          <li>
            <i></i>
            <a href="">보관함</a>
          </li>
        </ul>
      </div>
      <div className="navbar-top">
        <div className="login">
          <ul className="navbar-top-menu">
            <li>
              <div className="new">
                <i className="fa-regular fa-bell"></i>
              </div>
            </li>
            <li className="login-button">
              <a type="button" onClick={handleClick}>
                <span>로그인</span>
              </a>
            </li>
            <li className="join-button">
              <a type="button" onClick={handleClick2}>
                <span>회원가입</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
