import Ember from 'ember';

export default Ember.Route.extend({
model() {
    return Ember.RSVP.hash({
      feedItems: Ember.RSVP.Promise.cast(
        [{
          name: 'New feed item',
          description: 'This Trigger fires every time a new item is added to the feed you specify.',
        }, {
          name: 'New feed item matches',
          description: 'This Trigger fires every time a new item in the feed you specify contains a particular keyword or simple phrase.',
        }]
      ),
      headerItem: {title: 'Choose trigger', step:2}
    });
  }
});
