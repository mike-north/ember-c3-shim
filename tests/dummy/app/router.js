import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const r = Router.extend({
  location: config.locationType
});

r.map(function() {
});

export default r;
