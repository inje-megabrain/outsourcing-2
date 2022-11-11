import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../constants/Constants';

const record = '/record';
const date = '/month';
const day = '/day';

const headerConfig = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  accept: '*/*',
};

const handleError = (error: any) => {
  if (error.response) {
    toast.error(error.response.data);
  } else if (error.request) {
    toast.error(error.request);
  } else {
    toast.error(error.message);
  }
};

const recordByMonthAPI = (
  startDate: string,
  endDate: string,
  userName: string,
  token: string,
  setMonthEvent: React.Dispatch<React.SetStateAction<any>>,
) => {
  token &&
    axios
      .get(API_URL + record + '/' + userName + date, {
        params: { startDate, endDate },
        headers: { ...headerConfig, Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        const dataForEvent: any = [];
        response.data.map((data: any) =>
          dataForEvent.push({ date: data.date, title: data.time }),
        );
        setMonthEvent(dataForEvent);
      })
      .catch((error) => {
        handleError(error);
      });
};

const recordByMonthDayAPI = (
  yearMonthDay: string,
  userName: string,
  token: string,
  setData: React.Dispatch<React.SetStateAction<never[]>>,
  page: number,
  size: number,
) => {
  token &&
    axios
      .get(API_URL + record + '/' + userName + day, {
        params: { time: yearMonthDay, page, size },
        headers: { ...headerConfig, Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        handleError(error);
      });
};

export { recordByMonthAPI, recordByMonthDayAPI };
