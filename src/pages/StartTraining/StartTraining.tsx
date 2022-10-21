import React from 'react';
import IconHMD from '../../assets/icon_hmd.png';
import { MemberContainer } from '../../components';

const StartTraining = () => {
  return (
    <MemberContainer>
      <img
        className="rounded-full border-solid border-8 border-primary-blue p-8 w-64 h-64 mx-auto"
        src={IconHMD}
      />
      <p className="text-2xl text-center my-7">HMD를 착용해주세요</p>
    </MemberContainer>
  );
};

export default StartTraining;
