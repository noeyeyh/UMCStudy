import React, { useState } from 'react';
import './Login.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleLogin = () => {
    if (user.id === '') {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (user.password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    alert('로그인을 성공했습니다!');
    navigate('/');
  };

  return (
    <>
      {/* <div className="gray-background"></div> */}
      <MainContainer>
        <LoginContainer>
          <LoginLogo>이메일과 비밀번호를 입력해주세요</LoginLogo>
          <TextContainer>
            <MyInput
              type="text"
              placeholder="아이디"
              value={user.id}
              onChange={(e) => setUser({ ...user, id: e.target.value })}
              maxLength="20"
              autoFocus
            />
          </TextContainer>
          <TextContainer>
            <MyInput
              type="password"
              placeholder="비밀번호"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              maxLength="16"
              onKeyUp={(e) => e.key === 'Enter' && handleLogin()}
            />
          </TextContainer>
          <Line></Line>
          <LoginButton onClick={handleLogin} type="button" className="loginbtn">
            로그인
          </LoginButton>
        </LoginContainer>
      </MainContainer>
    </>
  );
};

export default Login;

const LoginLogo = styled.h1`
  margin-bottom: 60px;
  font-size: 24px;
`;
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 98vh;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'NanumSquare';
`;
const LoginContainer = styled.div`
  z-index: 2;
  margin: auto;
  align-items: center;
  padding: 60px 100px;
  border: 2px solid #e1e2e3;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
`;
const Line = styled.div`
  border-top: 1px solid #d8d8d8;
  margin: 50px auto;
`;
const MyInput = styled.input`
  width: 337px;
  height: 36px;
  padding-left: 15px;
  border-radius: 8px;
  border: 2px solid #cccccc;
  background-color: #ffffff;
  font-size: 11pt;
  font-family: 'NanumSquare';
`;
const TextContainer = styled.div`
  margin-bottom: 30px;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  border: 0;
  border-radius: 8px;
  background-color: #c2c2c2;
  font-size: 14pt;
  font-weight: 1000;
  color: #fff;
  cursor: pointer;
  font-family: 'NanumSquare';
`;
// .gray-background{
//     position: fixed;
//     z-index: 1;
//     top: 0%;
//     left: 0%;
//     width: 100%;
//     height: 100%;
//     background-color: #e1e1e1;
//   }
//   .loginbtnOn {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       margin-bottom: 30px;
//       width: 100%;
//       height: 54px;
//       border: 0;
//       border-radius: 30px;
//       background-color: #fe630a;
//       font-size: 14pt;
//       font-weight: 1000;
//       color: #fff;
//       cursor: pointer;
//       font-family: 'NanumSquare';
//   }
//   .loginbtn {

//   }
//   .loginbtnOn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 30px;
//     width: 100%;
//     height: 54px;
//     border: 0;
//     border-radius: 30px;
//     background-color: #fe630a;
//     font-size: 14pt;
//     font-weight: 1000;
//     color: #fff;
//     cursor: pointer;
//     font-family: 'NanumSquare';
// }
//   .goPage {
//       display: flex;
//       margin: 25px auto 0px;
//   }
//   .goPage li:first-child{
//       position: relative;
//       margin-right: 30px;
//   }
//   .goPage li:first-child:after {
//       content: '';
//       position: absolute;
//       right: -15px;
//       top: calc(50% - 8px);
//       display: block;
//       width: 1px;
//       height: 16px;
//       background: #a3a3a3;
//   }
//   .goPage li a {
//       font-size: 14px;
//       color: #9e917d;
//   }

//   a {
//     text-decoration: none;
//   }
//   li {
//     list-style-type: none;
//   }
//   @import urlimport styledimportimport styled from 'styled-components';
//  styled from 'styled-components';
//  from 'styled-components';
// ('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
