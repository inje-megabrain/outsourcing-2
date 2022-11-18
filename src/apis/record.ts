import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../constants/Constants';

const record = '/record';
const date = '/month';
const day = '/day';
const img = '/image';
const allrecord = '/all';
const searchURL = '/search';
const id = '/id';
const name = '/name';

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

const recordByMonthAPI = async (
  startDate: string,
  endDate: string,
  userName: string,
  token: string,
  setMonthEvent: React.Dispatch<React.SetStateAction<any>>,
) => {
  token &&
    (await axios
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
      }));
};

const recordByMonthDayAPI = async (
  yearMonthDay: string,
  userName: string,
  token: string,
  setData: React.Dispatch<
    React.SetStateAction<{
      userRecordDtos: never[];
      pageLimit: number;
    }>
  >,
  page: number,
  size: number,
) => {
  token &&
    (await axios
      .get(API_URL + record + '/' + userName + day, {
        params: { time: yearMonthDay, page, size },
        headers: { ...headerConfig, Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        handleError(error);
      }));
};

const recordImgById = async (
  userName: string,
  token: string,
  setData: React.Dispatch<React.SetStateAction<string | undefined>>,
  record_id?: string,
) => {
  await axios
    .get(API_URL + record + img + '/' + userName, {
      params: { record_id },
      headers: { ...headerConfig, Authorization: 'Bearer ' + token },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      handleError(error);
    });
};

const recordAllAPI = async (
  direction: 'DESC' | 'ASC',
  page: number,
  size: number,
  sortTag: string,
  token: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
) => {
  await axios
    .get(API_URL + record + allrecord, {
      params: { direction, page, size, sortTag },
      headers: { ...headerConfig, Authorization: 'Bearer ' + token },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      handleError(error);
    });
};

const recordById = async (
  token: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  username: string,
  recordId?: string,
) => {
  await axios
    .get(API_URL + record + name + username + '/' + recordId, {
      headers: { ...headerConfig, Authorization: 'Bearer ' + token },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      handleError(error);
    });
};

const recordByIdAdmin = async (
  token: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  recordId?: string,
) => {
  await axios
    .get(API_URL + record + id + '/' + recordId, {
      headers: { ...headerConfig, Authorization: 'Bearer ' + token },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      handleError(error);
    });
};

const searchRecord = async (
  token: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  direction: 'DESC' | 'ASC',
  page: number,
  size: number,
  sortTag: string,
  search: string,
) => {
  await axios
    .get(API_URL + record + searchURL, {
      params: { search, direction, page, size, sortTag },
      headers: { ...headerConfig, Authorization: 'Bearer ' + token },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      handleError(error);
    });
};

export {
  recordByMonthAPI,
  recordByMonthDayAPI,
  recordImgById,
  recordAllAPI,
  recordById,
  searchRecord,
  recordByIdAdmin,
};
