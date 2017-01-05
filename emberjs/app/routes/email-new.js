import Ember from 'ember';

export default Ember.Route.extend({
model() {
    return Ember.RSVP.hash({
      emailItems: Ember.RSVP.Promise.cast(
        [{
          name: 'Send me an email',
          description: 'This Action will send you an HTML based email. Images and links are supported.',
        }]
      ),
      headerItem: {title: 'Choose action', step:5}
    });
  }
});
