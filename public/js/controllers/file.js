import electron from 'electron';
const remote = electron.remote;
const fs = remote.require('fs');
const path = remote.require('path');

export const getFiles = () => {
  console.log(path.dirname);
};
