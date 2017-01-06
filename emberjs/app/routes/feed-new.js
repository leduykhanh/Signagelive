import Ember from 'ember';

export default Ember.Route.extend({
model() {
    return Ember.RSVP.hash({
      headerItem: {title: 'Complete trigger fields', step:3}
    });
  },
actions: {
    saveFeed:function(url) {
    	this.transitionTo('index', {queryParams: {state: 'that'}});
    }
  }
});
