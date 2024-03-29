import { MemberContainer, NavBar } from '../../components';
import InputEmail from './InputEmail';

const FindID = () => {
  return (
    <>
      <NavBar linktext="돌아가기" to="/login" />
      <MemberContainer>
        <h1 className="text-5xl text-center font-extrabold mb-8">
          아이디 찾기
        </h1>
        <InputEmail />
      </MemberContainer>
    </>
  );
};

export default FindID;
