import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   const handleClick = () => {
  //     setIsLoggedIn(!isLoggedIn);
  //   };
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate('/login');
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate('/');
  };
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      {/* <LoginButton onClick={handleClick}> */}
      <LoginButton
        onClick={isLoggedIn == false ? handleLoginClick : handleLogoutClick}
        // onClick={handleClick}
      >
        {isLoggedIn ? '로그인' : '로그아웃'}
      </LoginButton>
      <div style={{ color: 'white', marginLeft: 24 }}>
        {isLoggedIn ? '로그인 해주세요!' : '환영합니다!'}
      </div>
    </div>
  );
};

const LoginButton = styled.button`
  margin-left: 24px;
  background-color: #fff;
  color: #000;
  padding: 6px 20px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
`;
