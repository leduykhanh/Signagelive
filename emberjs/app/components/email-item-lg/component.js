import Ember from 'ember';
// import {validate} from 'validate';
export default Ember.Component.extend({
  ifttt: Ember.inject.service('ifttt'),
  email :"",
  beenkeyUp: false,
  valid: false,
  hasError: Ember.computed('valid', 'beenkeyUp', function() {
    if (this.get('beenkeyUp')) {
      return !this.get('valid');
    }
  }),
  keyUp: function() {
    this.set('beenkeyUp', true);
    var email = this.$("#email").val();
    var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regex = new RegExp(expression);
    if (email.match(regex)) {
      this.set('valid', true);
      this.set('email', email);
    }
    else this.set('valid', false);
  },
    actions: {
    saveEmail:function() {
      this.get("ifttt").add({email: this.get("email")});
      console.log(this.get("ifttt").items[0].url);
      this.sendAction();
    }
  }
});
