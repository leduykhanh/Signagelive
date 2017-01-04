import Ember from 'ember';
// import {validate} from 'validate';
export default Ember.Component.extend({
  beenkeyUp: false,
  valid: null,
  hasError: Ember.computed('valid', 'beenkeyUp', function() {
    if (this.get('beenkeyUp')) {
      return !this.get('valid');
    }
  }),
  keyUp: function() {
    this.set('beenkeyUp', true);
    console.log(this.$("#url"));
  }
});
