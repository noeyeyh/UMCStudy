import "./styles.css";

export default function SignUpPage() {
  var nicknameCount = 0;
  var errorName = "";
  var errorNickName = "";
  var errorEmail = "";
  var errorPw = "";
  var errorRePw = "";

  const onChangeName = (event) => {
    errorName = event.target.value;
  };
  const onChangeNickName = (event) => {
    errorNickName = event.target.value;
    nicknameCount = event.target.value.length;
  };
  const onChangeEmail = (event) => {
    errorEmail = event.target.value;
  };
  const onChangePw = (event) => {
    errorPw = event.target.value;
  };
  const onChangeRePw = (event) => {
    errorRePw = event.target.value;
  };

  const onClickSubmit = () => {
    console.log(nicknameCount);
    if (!errorName) {
      const errorMessageName = document.querySelector("#nameMessage");
      errorMessageName.style = "display:flex;";
    }
    if (!errorNickName || nicknameCount > 5 || nicknameCount < 2) {
      const errorMessageNickName = document.querySelector("#nicknameMessage");
      errorMessageNickName.style = "display:flex;";
    }
    if (!errorEmail) {
      const errorMessageEmail = document.querySelector("#EmailMessage");
      errorMessageEmail.style = "display:flex;";
    }
    if (!errorPw) {
      const errorMessagePw = document.querySelector("#PwMessage");
      errorMessagePw.style = "display:flex;";
    }
    if (!errorRePw) {
      const errorMessageRePw = document.querySelector("#RePwMessage");
      errorMessageRePw.style = "display:flex;";
    }
  };

  return (
    <div className="Wrapper">
      <div className="SignUpWrapper">
        <h1 className="title">회원 가입</h1>
        <div className="input-box">
          <div className="text">이름</div>
          <input type="text" className="Input" onChange={onChangeName} />
          <p className="warringMessage" id="nameMessage">
            필수 입력항목입니다!
          </p>
        </div>
        <div className="input-box">
          <div className="text">닉네임</div>
          <input
            type="text"
            id="NickNameInput"
            className="Input"
            onChange={onChangeNickName}
          />
          <p className="warringMessage" id="nicknameMessage">
            닉네임은 2~5글자로 구성해주세요!
          </p>
        </div>
        <div className="input-box">
          <div className="text">이메일</div>
          <input type="text" className="Input" onChange={onChangeEmail} />
          <p className="warringMessage" id="EmailMessage">
            올바른 메일 형식이 아닙니다!
          </p>
        </div>
        <div className="input-box">
          <div className="text">비밀번호</div>
          <input type="password" className="Input" onChange={onChangePw} />
          <p className="warringMessage" id="PwMessage">
            영어+숫자+특수문자를 조합하여 작성해주세요.
          </p>
        </div>
        <div className="input-box">
          <div className="text">비밀번호 확인</div>
          <input type="password" className="Input" onChange={onChangeRePw} />
          <p className="warringMessage" id="RePwMessage">
            비밀번호가 일치하지 않습니다!
          </p>
        </div>
        <button onClick={onClickSubmit} className="submit">
          가입하기
        </button>
      </div>
    </div>
  );
}
