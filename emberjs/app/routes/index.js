import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({data:{id:1,type:"feed",url:"ccc.com"}});
    return Ember.RSVP.hash({
      serviceItems: Ember.RSVP.Promise.cast(
        [{
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (2).png',
          name: 'Feed',
          url: '/feed/'
        }, {
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (3).png',
          name: 'Mail',
          url: '/email/'
        }, {
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (4).png',
          name: 'Feed'
        }, {
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (5).png',
          name: 'Feed'
        }, {
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (2).png',
          name: 'Feed'
        }, {
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (2).png',
          name: 'Feed'
        }]
      ),
    });
  }
});
