import React from 'react';
import FullCalendar from '@fullcalendar/react';
import '@fullcalendar/react/dist/vdom';
import dayGridViewPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AdminContainer } from '../../components';

const Calendar = () => {
  const handleDateClick = (arg: any) => {
    alert(arg.dateStr);
  };
  return (
    <AdminContainer
      title="개인 기록 조회"
      detail="선택한 월별로 훈련한 기록을 모아볼 수 있습니다."
    >
      <FullCalendar
        plugins={[dayGridViewPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2022-11-01' },
          { title: 'event 2', date: '2022-11-02' },
        ]}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
      />
    </AdminContainer>
  );
};

const renderEventContent = (eventInfo: any) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};

export default Calendar;
