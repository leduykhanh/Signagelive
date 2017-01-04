import Ember from 'ember';

export default Ember.Route.extend({
model() {
    return Ember.RSVP.hash({
      headerItem: {title: 'Complete trigger fields', step:3}
    });
  }
});
