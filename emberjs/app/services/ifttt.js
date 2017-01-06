import Ember from 'ember';

export default Ember.Service.extend({
  items: null,
  state : null,

  init() {
    this._super(...arguments);
    this.set('items', []);
    this.set('state', 'this');
  },

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  },
  setState(state){
    this.set('state', state);
  }
});