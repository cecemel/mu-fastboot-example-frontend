import DS from 'ember-data';
import config from 'mu-fastboot-example-frontend/config/environment';

export default DS.JSONAPIAdapter.extend({

  host: config.APP.backendHost,
});
