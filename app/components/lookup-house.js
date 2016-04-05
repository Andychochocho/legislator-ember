import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    houseLookUp() {
      this.sendAction('houseLookUp');
    }
  }
});
