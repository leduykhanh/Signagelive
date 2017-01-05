import Ember from 'ember';
// import {validate} from 'validate';
export default Ember.Component.extend({
  ifttt: Ember.inject.service('ifttt'),
  url :"",
  beenkeyUp: false,
  valid: false,
  hasError: Ember.computed('valid', 'beenkeyUp', function() {
    if (this.get('beenkeyUp')) {
      return !this.get('valid');
    }
  }),
  keyUp: function() {
    this.set('beenkeyUp', true);
    var url = this.$("#url").val();
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (url.match(regex)) {
      this.set("url", url);
      this.set('valid', true);}
    else this.set('valid', false);
  },
  actions: {
    saveFeed:function() {
      this.get("ifttt").add({url: this.get("url")});
      console.log(this.get("ifttt").items[0].url);
      this.sendAction();
    }
  }
});
