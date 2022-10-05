import React from 'react';
import IconHMD from '../../assets/icon_hmd.png';

const StartTraining = () => {
  return (
    <div className="mx-auto max-w-md justify-items-start">
      <img
        className="rounded-full border-solid border-8 border-primary-blue p-8 w-64 h-64"
        src={IconHMD}
      />
      <p className="text-xl text-center my-7">HMD를 착용해주세요</p>
    </div>
  );
};

export default StartTraining;
