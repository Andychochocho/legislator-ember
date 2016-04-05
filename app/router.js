import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  // add this later underneath
  this.route('house', {path: '/house/'});
  this.route('senate', {path: '/senate/'});
});

export default Router;
