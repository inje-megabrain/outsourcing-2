import { useState } from 'react';

import { MemberContainer, NavBar } from '../../components';
import ChangePW from './ChangePW';
import CompleteChange from './CompleteChange';
import InputEmail from './InputEmail';
import VerifyEmail from './VerifyEmail';

const FindPW = () => {
  const [pwLevel, setPwLevel] = useState(0);
  const [email, setEmail] = useState('');
  return (
    <>
      <NavBar linktext="돌아가기" to="/login" />
      <MemberContainer>
        <h1 className="text-5xl text-center font-extrabold mb-8">
          비밀번호 찾기
        </h1>
        {(pwLevel === 0 && (
          <InputEmail setEmail={setEmail} setPwLevel={setPwLevel} />
        )) ||
          (pwLevel === 1 && (
            <VerifyEmail email={email} setPwLevel={setPwLevel} />
          )) ||
          (pwLevel === 2 && (
            <ChangePW email={email} setPwLevel={setPwLevel} />
          )) ||
          (pwLevel === 3 && <CompleteChange />)}
      </MemberContainer>
    </>
  );
};

export default FindPW;
