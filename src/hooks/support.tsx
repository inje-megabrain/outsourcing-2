import React from 'react';
import { toast } from 'react-toastify';

const position = toast.POSITION.TOP_RIGHT;

const alertFail = (alerttext: string) => {
  toast.error(alerttext, {
    position: position,
  });
};

const alertSuccess = (alerttext: string) => {
  toast.success(alerttext, {
    position: position,
  });
};

const alertInfo = (alerttext: string) => {
  toast.info(alerttext, {
    position: position,
  });
};

export { alertFail, alertSuccess, alertInfo };
