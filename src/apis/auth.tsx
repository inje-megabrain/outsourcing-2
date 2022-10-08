import React from 'react';

const authurl: string = '';

const login: string = authurl + '/authenticate';
const mail: string = authurl + '/mail';
const mailcheck: string = authurl + '/mailcheck';

export { login, mail, mailcheck };
