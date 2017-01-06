import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition, queryParams) {
    this.store.push({data:{id:1,type:"feed",url:"ccc.com"}});

    return Ember.RSVP.hash({
      serviceItems: Ember.RSVP.Promise.cast(
        [{
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (4).png',
          name: 'Feed',
          url: 'feed'
        }, {
          itemId: 'feed-service',
          image: 'assets/images/on_color_large (5).png',
          name: 'Mail',
          url: 'email'
        }, {
          itemId: 'feed-2',
          image: 'assets/images/on_color_large (1).png',
          name: 'Feed'
        }, {
          itemId: 'feed-1',
          image: 'assets/images/on_color_large (6).png',
          name: 'Feed'
        }, {
          itemId: 'feed-3',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }, {
          itemId: 'feed-4',
          image: 'assets/images/on_color_large (2).png',
          name: 'Twitter'
        }]
      ),
      that:params.state=='that'
    });
  }
});
