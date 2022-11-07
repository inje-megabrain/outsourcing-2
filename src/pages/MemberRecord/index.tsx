import React from 'react';
import FullCalendar from '@fullcalendar/react';
import '@fullcalendar/react/dist/vdom';
import dayGridViewPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AdminContainer } from '../../components';

const CalendarView = () => {
  const handleEventClick = (arg: any) => {
    console.log(arg.event.start.toLocaleDateString('en-ca'));
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
        events={[
          { title: 'event 1', date: '2022-11-01' },
          { title: 'event 2', date: '2022-11-02' },
        ]}
        eventClick={handleEventClick}
      />
    </AdminContainer>
  );
};

export default CalendarView;
