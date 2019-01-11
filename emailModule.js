'use strict';

const uniqueEmails = (function() {
  const dataset = require('./log.json');
  const emails = dataset.emails;

  const report = emails.reduce((obj, current) => {
    if (obj.hasOwnProperty(current.email)) {
      obj[current.email]++;
    } else {
      obj[current.email] = 1;
    }

    return obj;
  }, {});
  return report;
})();
