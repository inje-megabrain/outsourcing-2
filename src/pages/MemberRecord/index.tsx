import '@fullcalendar/react/dist/vdom.js';
import dayGridViewPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import '@fullcalendar/react/dist/vdom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { recordByMonthAPI } from '../../apis/record';
import { AdminContainer, Loading } from '../../components';
import { jwtTokenState, usernameState } from '../../states/atoms';

const CalendarView = () => {
  const token = useRecoilValue(jwtTokenState);
  const [monthEvent, setMonthEvent] = useState([{}]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const username = useRecoilValue(usernameState);
  const navigate = useNavigate();

  const callAPI = async () => {
    await recordByMonthAPI(startDate, endDate, username, token, setMonthEvent);
  };
  useEffect(() => {
    token !== '' && callAPI();
  }, [startDate, token]);

  return token !== '' ? (
    <AdminContainer
      title="개인 기록 조회"
      detail="선택한 월별로 훈련한 기록을 모아볼 수 있습니다."
      homelink="/mode"
      backlink
    >
      <FullCalendar
        height={'100%'}
        viewClassNames="bg-white"
        slotLabelClassNames="text-red-800"
        eventClassNames="bg-[#0057FF] leading-[19px] text-[16px] font-normal rounded-lg text-center h-[40px] justify-center pt-2 pb-2 self-center tracking-[-0.055em] mx-[7px] my-[2.5px]"
        locale={'ko-kr'}
        plugins={[dayGridViewPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={(arg) => {
          navigate(arg.dateStr);
        }}
        eventClick={(arg) => {
          navigate(arg.event.startStr);
        }}
        events={[...monthEvent]}
        viewDidMount={(event) => {
          setStartDate(event.view.activeStart.toLocaleDateString('en-ca'));
          setEndDate(event.view.activeEnd.toLocaleDateString('en-ca'));
        }}
        dayCellClassNames="border-white hover:border-[#005dfe] hover:border-[3px] h-[16%]"
        datesSet={(arg) => {
          setStartDate(arg.start.toLocaleDateString('en-ca'));
          setEndDate(arg.end.toLocaleDateString('en-ca'));
        }}
      />
    </AdminContainer>
  ) : (
    <Loading />
  );
};

export default CalendarView;
