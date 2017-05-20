/* @flow weak */

const Listr = require('listr');

const errors = require('@knit/nice-errors');
const log = require('@knit/logger');
const tasks = require('@knit/common-tasks');

module.exports = (argv) => {
  new Listr([
    ...tasks.preflight.istag,
    ...tasks.preflight.git,
    ...tasks.modules,
    ...tasks.preflight.knit,
    ...tasks.packages,
    ...tasks.unpublished,
    ...require('../tasks/publish'),
  ], {
    renderer: log.getRenderer(argv),
    collapse: false,
  }).run(argv).catch(errors.catchErrors);
};
