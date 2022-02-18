/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const fulfillPromise = () => new Promise((fulfill, reject) => {
  setTimeout(() => { fulfill('FULFILLED!'); }, 1800);
});
fulfillPromise().then((message) => { console.log(message); });

module.exports = fulfillPromise;
