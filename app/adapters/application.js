/* import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
}  */

/* import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  namespace: 'api'
}); */

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
   namespace: 'api' 
});