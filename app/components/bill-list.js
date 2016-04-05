import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billLookUp() {
      this.sendAction('billLookUp');
    }
  }
});
