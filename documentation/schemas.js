/* eslint global-require: 0 */

import { fromJS } from 'immutable';

export default fromJS([
  // The "getting started" schema provides table-of-contents links
  // for the sections in src/client/introduction.js.  You are free
  // to customize or remove both the schema and the introduction component.
  // require('./getting-started.json'),
  require('../schemas/draft-06-latest/dcp.json'),
  require('../schemas/draft-06-latest/message.json'),
  require('../schemas/draft-06-latest/series.json'),
  require('../schemas/draft-06-latest/types.json')
]);
