import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import '@fullcalendar/react/dist/vdom';
import dayGridViewPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AdminContainer } from '../../components';
import { recordByMonthAPI } from '../../apis/record';
import { useRecoilValue } from 'recoil';
import { jwtTokenState, usernameState } from '../../states/atoms';
import { useNavigate } from 'react-router-dom';

const CalendarView = () => {
  const token = useRecoilValue(jwtTokenState);
  const [monthEvent, setMonthEvent] = useState([{}]);
  const username = useRecoilValue(usernameState);
  const navigate = useNavigate();
  const handleEventClick = (arg: any) => {
    navigate(arg.event.start.toLocaleDateString('en-ca'));
  };

  return (
    <AdminContainer
      title="개인 기록 조회"
      detail="선택한 월별로 훈련한 기록을 모아볼 수 있습니다."
    >
      <FullCalendar
        height={'100%'}
        viewClassNames="bg-white"
        slotLabelClassNames="text-red-800"
        eventClassNames="bg-[#0057FF] rounded-lg text-center h-[40px] justify-center pt-2 pb-2 self-center"
        locale={'ko-kr'}
        plugins={[dayGridViewPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        eventClick={handleEventClick}
        events={[...monthEvent]}
        viewDidMount={(event) => {
          event.view.currentStart;
        }}
        datesSet={(event) => {
          recordByMonthAPI(
            event.start.toLocaleDateString('en-ca'),
            event.end.toLocaleDateString('en-ca'),
            username,
            token,
            setMonthEvent,
          );
        }}
      />
    </AdminContainer>
  );
};

export default CalendarView;
