'use strict';

const uniqueEmails = (function() {
  const dataset = require('./log.json');
  const emails = dataset.emails;

  const report = emails.reduce((uniqueEmails, current) => {
    if (uniqueEmails.hasOwnProperty(current.email)) {
      uniqueEmails[current.email]++;
    } else {
      uniqueEmails[current.email] = 1;
    }

    return uniqueEmails;
  }, {});
  return report;
})();
