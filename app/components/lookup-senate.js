import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    senateLookUp() {
      this.sendAction('senateLookUp');
    }
  }
});
