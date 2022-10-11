import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../apis/auth';
import Logo from '../../assets/logo.png';
import { Button, Input, MemberContainer } from '../../components';

const Login = () => {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const navigate = useNavigate();

  const onPwChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPW(e.target.value);
  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setID(e.target.value);

  const onLoginButtonClick = async (e: any) => {
    const result = loginAPI(id, pw);
    alert(result);
  };

  const onGuestModeButtonClick = (e: any) => {
    navigate('/mode/guest');
  };
  return (
    <MemberContainer>
      <img className="mx-auto mb-4" src={Logo} />
      <form>
        <Input
          value={id}
          onChange={onIdChange}
          type="text"
          className="mb-2"
          placeholder="아이디 입력"
        />
        <Input
          value={pw}
          onChange={onPwChange}
          type="password"
          placeholder="비밀번호 입력"
        />

        <h6 className="text-right my-7">
          <Link className="underline" to="/findid">
            아이디
          </Link>{' '}
          또는{' '}
          <Link className="underline" to="/findpw">
            비밀번호 찾기
          </Link>
        </h6>
        <Button type="submit" className="mb-2" onClick={onLoginButtonClick}>
          로그인
        </Button>
      </form>
      <Button className="mb-2" onClick={onGuestModeButtonClick}>
        게스트 모드
      </Button>
      <Link to="/signup">
        <h6 className="underline text-center mt-7">회원가입</h6>
      </Link>
    </MemberContainer>
  );
};
export default Login;
