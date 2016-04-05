import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=2b8a2ba2eda94b66a90946f269dba995';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }

});
