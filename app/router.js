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
  this.route('senate-details', {path: '/senate-details/:{{senate.committee_id}}'});
  this.route('house-details', {path: '/house-details/:{{house.committee_id}}'});
});

export default Router;
