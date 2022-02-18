/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const rejectPromise = () => new Promise((fulfill, reject) => {
  setTimeout(() => { reject('REJECTED!'); }, 300);
});

const onReject = (error) => {
  console.log(error);
};
rejectPromise().then(null).catch(onReject);
module.exports = { rejectPromise, onReject };
